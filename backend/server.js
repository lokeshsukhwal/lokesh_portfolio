const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('Warning: MONGODB_URI is not defined in the environment variables.');
} else {
  mongoose.connect(mongoUri)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
}

// Enable CORS for frontend requests
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:3000',
  'http://localhost:3001' // standard react ports
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Parsers for standard requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer to store uploaded files in memory
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB file size limit
  }
});

// Configure Nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for others
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Verify SMTP connection configuration on startup
if (process.env.SMTP_HOST && process.env.SMTP_USER) {
  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Transport Verification Error:', error);
    } else {
      console.log('SMTP Transport is ready to send messages');
    }
  });
} else {
  console.log('SMTP configuration is missing. Email notifications will be disabled.');
}

// Contact Route
app.post('/api/contact', upload.single('attachment'), async (req, res) => {
  const { name, email, subject, message } = req.body;
  const attachment = req.file;

  // Basic Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Required fields missing. Please provide name, email, subject, and message.'
    });
  }

  try {
    // 1. Save to MongoDB
    const contactData = {
      name,
      email,
      subject,
      message
    };

    if (attachment) {
      contactData.attachment = {
        filename: attachment.originalname,
        contentType: attachment.mimetype,
        size: attachment.size
      };
    }

    const newContact = new Contact(contactData);
    await newContact.save();
    console.log('Contact saved to MongoDB database');

    // 2. Send email notification (if SMTP is configured)
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      try {
        const mailOptions = {
          from: `"${name}" <${process.env.SMTP_USER}>`, // Send on behalf of user, using system sender email to avoid SPF/DMARC blocks
          replyTo: email, // Direct replies back to the sender's actual email
          to: process.env.RECEIVER_EMAIL,
          subject: `Portfolio Contact: ${subject}`,
          text: `You have received a new contact request from your portfolio.
          
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
              <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td>
                  <td style="padding: 8px 0; color: #374151;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
                  <td style="padding: 8px 0; color: #374151;">${subject}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; background-color: #f9fafb; border-left: 4px solid #d1d5db; padding: 15px; border-radius: 4px;">
                <h4 style="margin: 0 0 10px 0; color: #1f2937;">Message:</h4>
                <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${message}</p>
              </div>
              <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p style="font-size: 12px; color: #9ca3af; text-align: center; margin-bottom: 0;">This email was sent automatically from your portfolio contact form.</p>
            </div>
          `,
          attachments: []
        };

        if (attachment) {
          mailOptions.attachments.push({
            filename: attachment.originalname,
            content: attachment.buffer
          });
        }

        await transporter.sendMail(mailOptions);
        console.log('Notification email sent successfully');
      } catch (emailError) {
        // Log the email error but don't fail the response since it's already saved to MongoDB
        console.error('Failed to send notification email:', emailError);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Message received and saved successfully!'
    });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', time: new Date() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Start the server (only if not running as a Vercel serverless function)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
  });
}

// Export the app for Vercel Serverless Functions
module.exports = app;
