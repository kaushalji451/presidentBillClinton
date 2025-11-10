// utils/mailer.js
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
console.log("SMTP settings:", process.env.SMTP_HOST, process.env.SMTP_PORT);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // <-- add this line
  },
});

async function sendContactEmail({ contactData }) {
  // Build a simple HTML body. Customize as needed.
  const htmlBody = `
    <h2>New Contact Submission</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      ${Object.entries(contactData).map(([k, v]) => `
        <tr>
          <td style="font-weight:bold;text-transform:capitalize;">${k}</td>
          <td>${String(v || '')}</td>
        </tr>
      `).join('')}
    </table>
  `;

  const mailOptions = {
    from: `"${process.env.FROM_NAME || 'App'}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
    to: process.env.TO_EMAIL, // comma-separated list allowed
    subject: `New contact/invitation: ${contactData.eventTitle || contactData.contactName || 'No title'}`,
    text: Object.entries(contactData).map(([k, v]) => `${k}: ${v}`).join('\n'),
    html: htmlBody,
  };

  // Send and return result
  const info = await transporter.sendMail(mailOptions);
  return info;
}

module.exports = { sendContactEmail, transporter };
