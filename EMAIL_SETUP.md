# Email Setup for Newsletter

This guide will help you set up EmailJS to send emails when users subscribe to your newsletter.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to LOVEWORLD SONS OF MINISTRY Newsletter</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Welcome to Loveworld Sons of Ministry</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Newsletter Subscription Confirmation</p>
    </div>
    
    <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #1e3a8a; margin-top: 0;">Hello {{to_name}},</h2>
        
        <p>Thank you for subscribing to our newsletter! We're excited to have you join our community of minister's children and families.</p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
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
            <a href="https://somwebsit.netlify.app/" style="background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">Visit Our Website</a>
        </div>
        
        <p style="font-size: 14px; color: #64748b; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            If you have any questions or would like to unsubscribe, please contact us at info@loveworldsonsofministry.org
        </p>
    </div>
</body>
</html>
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Update the Newsletter Component

Replace the placeholder values in `src/components/Newsletter.tsx`:

```typescript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Your EmailJS public key

const response = await emailjs.send(
  'YOUR_SERVICE_ID', // Your EmailJS service ID
  'YOUR_TEMPLATE_ID', // Your EmailJS template ID
  templateParams
);
```

## Step 6: Test the Functionality

1. Start your development server: `npm run dev`
2. Go to the newsletter section on your website
3. Enter an email address and submit
4. Check if the email is received

## Important Notes

- **Free Plan Limits**: EmailJS free plan allows 200 emails per month
- **Template Variables**: The template uses `{{to_name}}` and `{{to_email}}` variables that are automatically replaced
- **Customization**: You can customize the email template HTML to match your brand
- **Security**: Never expose your private keys in client-side code

## Troubleshooting

- If emails aren't sending, check the browser console for errors
- Verify all IDs and keys are correct
- Make sure your email service is properly connected
- Check your EmailJS dashboard for any error messages

## Alternative Email Services

If you prefer other email services, you can also use:
- SendGrid
- Mailgun
- AWS SES (requires backend)
- Nodemailer (requires backend)

For production use, consider setting up a backend API to handle email sending more securely.
