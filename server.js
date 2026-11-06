const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'MidNight server is running.' });
});

app.post('/api/register', async (req, res) => {
  const email = (req.body.email || '').trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  try {
    await transporter.sendMail({
      from: `MidNight <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to MidNight! 🎮',
      html: `
        <div style="font-family: Arial, sans-serif; background: #081221; color: #edf6ff; padding: 32px; border-radius: 16px; max-width: 640px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="margin: 0; color: #7c3aed; letter-spacing: 2px;">MIDNIGHT</h1>
          </div>
          <h2 style="color: #67e8f9;">Welcome to the arena, gamer!</h2>
          <p style="font-size: 16px; line-height: 1.7; color: #dbeafe;">
            Your registration has been successful. You are now part of the MidNight community — where elite gameplay, cool drops, and next-level energy meet.
          </p>
          <p style="font-size: 16px; line-height: 1.7; color: #dbeafe;">
            Get ready for tournaments, exclusive rewards, and a gaming experience built for players who love the thrill.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://midnight.example.com" style="display: inline-block; background: linear-gradient(90deg, #7c3aed, #06b6d4); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 999px; font-weight: bold;">Enter the Midnight</a>
          </div>
          <p style="font-size: 14px; color: #cbd5e1;">From the MidNight crew — we’re glad you joined us.</p>
        </div>
      `,
    });

    return res.status(200).json({
      message: `Welcome email sent successfully to ${email}.`,
    });
  } catch (error) {
    console.error('Email send failed:', error);
    return res.status(500).json({
      message: 'Unable to send the welcome email right now. Please check your Gmail app password and environment setup.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`MidNight is running on http://localhost:${PORT}`);
});
