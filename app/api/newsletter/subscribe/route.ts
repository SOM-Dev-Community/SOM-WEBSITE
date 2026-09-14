import {
  adminInbox,
  escapeHtml,
  field,
  getTransporter,
  isRateLimited,
  isValidEmail,
  json,
  mailConfigured,
  readJson,
  singleLine,
} from "@/lib/mailer";
import { siteName, siteUrl } from "@/lib/site";

export async function POST(request: Request) {
  if (isRateLimited(request, "newsletter")) {
    return json({ success: false, message: "Too many requests. Please try again later." }, 429);
  }

  const body = await readJson(request);
  if (!body) {
    return json({ success: false, message: "Invalid request." }, 400);
  }

  const name = singleLine(field(body, "name")).slice(0, 100);
  const email = field(body, "email");

  if (!name || !email) {
    return json({ success: false, message: "Name and email are required" }, 400);
  }
  if (!isValidEmail(email)) {
    return json({ success: false, message: "Please enter a valid email address" }, 400);
  }
  if (!mailConfigured()) {
    console.error("Newsletter: EMAIL_USER / EMAIL_PASS are not set");
    return json({ success: false, message: "Email service not configured. Please contact the administrator." }, 500);
  }

  const safeName = escapeHtml(name);

  const welcomeEmailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Welcome to ${siteName}</title>
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
        <h1 style="margin: 0; font-size: 28px;">Welcome to ${siteName}</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Newsletter Subscription Confirmation</p>
      </div>

      <div class="content">
        <h2 style="color: #1e3a8a; margin-top: 0;">Hello ${safeName},</h2>

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
          <a href="${siteUrl}" class="cta-button">Visit Our Website</a>
        </div>

        <div class="footer">
          If you have any questions or would like to unsubscribe, please contact us at support@loveworldsonsofministry.org
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"${siteName}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Welcome to ${siteName} Newsletter`,
      html: welcomeEmailHTML,
      replyTo: process.env.EMAIL_USER,
    });

    // Notify the ministry inbox so every subscriber is recorded somewhere.
    await transporter.sendMail({
      from: `"${siteName} Website" <${process.env.EMAIL_USER}>`,
      to: adminInbox(),
      subject: `New newsletter subscriber: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nDate: ${new Date().toISOString()}`,
    });

    return json({ success: true, message: "Thank you for subscribing! Check your email for a welcome message." });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return json(
      { success: false, message: "Sorry, there was an error processing your subscription. Please try again." },
      500,
    );
  }
}
