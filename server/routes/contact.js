const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

// @route   POST /api/contact
// @desc    Submit contact form and send email
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all fields' });
    }

    try {
        // 1. Save to Database
        const newMessage = new Message({
            name,
            email,
            message,
        });
        await newMessage.save();

        // 2. Send Email Notification
        try {
            // Create transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // Email options
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'aryanbhardwajkumar9@gmail.com', // Recipient email
                subject: `New Portfolio Message from ${name}`,
                text: `
                    Name: ${name}
                    Email: ${email}
                    Message: ${message}
                    Date: ${new Date().toLocaleString()}
                `,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                    <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                `,
            };

            // Send email
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');

        } catch (emailError) {
            console.error('Email Notification Failed:', emailError);
            // We do NOT return an error to the client here because the message was saved successfully.
        }

        res.status(200).json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
        console.error('Contact Form Error:', error);
        res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
    }
});

module.exports = router;
