import sgMail from '@sendgrid/mail';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { user_name, user_email, user_phone, message } = req.body;

    // Basic validation
    if (!user_name || !user_email || !user_phone || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Set API Key from environment variables
    sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY || '');

    const msg = {
        to: process.env.VITE_REPLY_TO || 'anatoly@rework.co.il',
        from: process.env.VITE_FROM_EMAIL || 'anatoly@rework.co.il', // Verified sender in SendGrid
        subject: `New Lead from Portfolio: ${user_name}`,
        text: `
      Name: ${user_name}
      Email: ${user_email}
      Phone: ${user_phone}
      
      Message:
      ${message}
    `,
        html: `
      <h2>New Lead from Portfolio Website</h2>
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Phone:</strong> ${user_phone}</p>
      <br/>
      <p><strong>Message:</strong></p>
      <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
        ${message.replace(/\n/g, '<br/>')}
      </div>
    `,
    };

    try {
        await sgMail.send(msg);
        return res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('SendGrid Error:', error);
        if (error.response) {
            console.error(error.response.body);
        }
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
