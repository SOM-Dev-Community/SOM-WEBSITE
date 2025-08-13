const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // or 'outlook', 'yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS  // your app password
    }
  });
};

// Newsletter subscription endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validate input
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and email are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    // Create email transporter
    const transporter = createTransporter();
    
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({ 
        success: false, 
        message: 'Email service not configured. Please contact the administrator.' 
      });
    }

    // Welcome email HTML template
    const welcomeEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Welcome to Loveworld Sons of Ministry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
          .highlight { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6; }
          .cta-button { background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold; }
          .footer { font-size: 14px; color: #64748b; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0; font-size: 28px;">Welcome to Loveworld Sons of Ministry</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Newsletter Subscription Confirmation</p>
        </div>
        
        <div class="content">
          <h2 style="color: #1e3a8a; margin-top: 0;">Hello ${name},</h2>
          
          <p>Thank you for subscribing to our newsletter! We're excited to have you join our community of minister's children and families.</p>
          
          <div class="highlight">
            <h3 style="color: #1e3a8a; margin-top: 0;">What to Expect:</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Latest insights and spiritual content</li>
              <li>Upcoming events and programs</li>
              <li>Powerful testimonies and stories</li>
              <li>Ways to grow in faith together</li>
              <li>Special programs for minister's children</li>
            </ul>
          </div>
          
          <p>Stay tuned for our next newsletter where we'll share inspiring content designed to strengthen your faith and ministry journey.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://somwebsit.netlify.app/" class="cta-button">Visit Our Website</a>
          </div>
          
          <div class="footer">
            If you have any questions or would like to unsubscribe, please contact us at support@loveworldsonsofministry.org
          </div>
        </div>
      </body>
      </html>
    `;

    // Send welcome email
    const mailOptions = {
      from: `"Loveworld Sons of Ministry" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Loveworld Sons of Ministry Newsletter',
      html: welcomeEmailHTML,
      replyTo: process.env.EMAIL_USER
    };

    await transporter.sendMail(mailOptions);

    // Log subscription (you can add database storage here)
    console.log(`New newsletter subscription: ${name} (${email})`);
    console.log(`Sending email from: ${process.env.EMAIL_USER} to: ${email}`);

    res.json({ 
      success: true, 
      message: 'Thank you for subscribing! Check your email for a welcome message.' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      res.status(500).json({ 
        success: false, 
        message: 'Email authentication failed. Please check your email credentials.' 
      });
    } else if (error.code === 'ECONNECTION') {
      res.status(500).json({ 
        success: false, 
        message: 'Email connection failed. Please check your internet connection.' 
      });
    } else if (error.message && error.message.includes('createTransport')) {
      res.status(500).json({ 
        success: false, 
        message: 'Email service configuration error. Please check server setup.' 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Sorry, there was an error processing your subscription. Please try again.' 
      });
    }
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Newsletter endpoint: http://localhost:${PORT}/api/newsletter/subscribe`);
});
