const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../database');

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        // Create uploads directory if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // Unique filename: timestamp-originalName
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

// POST /api/contact
router.post('/', upload.single('attachment'), async (req, res) => {
    const { name, email, subject, message } = req.body;
    const attachmentPath = req.file ? req.file.path : null;

    const sql = `INSERT INTO contacts (name, email, subject, message, attachmentPath) VALUES (?, ?, ?, ?, ?)`;
    const params = [name, email, subject, message, attachmentPath];

    try {
        const [result] = await db.query(sql, params);
        res.status(201).json({
            message: 'Message sent successfully!',
            id: result.insertId
        });
    } catch (err) {
        console.error('Error saving contact:', err);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
