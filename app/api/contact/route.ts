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
import { siteName } from "@/lib/site";

export async function POST(request: Request) {
  if (isRateLimited(request, "contact")) {
    return json({ success: false, message: "Too many messages. Please try again later." }, 429);
  }

  const body = await readJson(request);
  if (!body) {
    return json({ success: false, message: "Invalid request." }, 400);
  }

  const fullName = singleLine(field(body, "fullName")).slice(0, 100);
  const email = field(body, "email");
  const subject = singleLine(field(body, "subject")).slice(0, 200);
  const message = field(body, "message").slice(0, 5000);

  if (!fullName || !email || !subject || !message) {
    return json({ success: false, message: "Please fill in all fields." }, 400);
  }
  if (!isValidEmail(email)) {
    return json({ success: false, message: "Please enter a valid email address" }, 400);
  }
  if (!mailConfigured()) {
    console.error("Contact: EMAIL_USER / EMAIL_PASS are not set");
    return json({ success: false, message: "Email service not configured. Please contact the administrator." }, 500);
  }

  try {
    await getTransporter().sendMail({
      from: `"${siteName} Website" <${process.env.EMAIL_USER}>`,
      to: adminInbox(),
      replyTo: `"${fullName}" <${email}>`,
      subject: `Contact form: ${subject}`,
      text: `From: ${fullName} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(fullName)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    return json({ success: true, message: "Thank you! Your message has been sent. We'll be in touch soon." });
  } catch (error) {
    console.error("Contact form error:", error);
    return json({ success: false, message: "Sorry, your message could not be sent. Please try again." }, 500);
  }
}
