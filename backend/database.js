const mysql = require('mysql2');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
};

const dbName = process.env.DB_NAME || 'portfolio_contact';

// Create a pool placeholder
let pool;

const initDB = async () => {
    try {
        // 1. Connect to MySQL server (without database) to check/create DB
        const connection = await mysql.createConnection({
            ...dbConfig,
        });

        await connection.promise().query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
        console.log(`Database '${dbName}' checked/created.`);
        await connection.end();

        // 2. Create the pool with the database
        pool = mysql.createPool({
            ...dbConfig,
            database: dbName,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // 3. Create the table
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        attachmentPath VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

        await pool.promise().query(createTableQuery);
        console.log('Table contacts initialized.');

    } catch (error) {
        console.error('Error initializing database:', error);
        // If ECONNREFUSED, it means server is down.
        if (error.code === 'ECONNREFUSED') {
            console.error('CRITICAL: Could not connect to MySQL server. Is it running?');
        }
    }
};

initDB();

// Export a wrapper to ensure we use the initialized pool
module.exports = {
    query: async (...args) => {
        if (!pool) {
            throw new Error('Database not initialized yet. Check server logs.');
        }
        return pool.promise().query(...args);
    }
};
