# Quick EmailJS Setup Guide

## The Error You're Seeing
The error "Sorry, there was an error sending the email" appears because EmailJS isn't configured yet. Here's how to fix it:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Get Your Public Key
1. In EmailJS dashboard, go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `user_abc123def456`)

## Step 3: Set Up Email Service
1. Go to **Email Services** in your dashboard
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email provider)
4. Follow the authentication steps
5. Copy the **Service ID** (looks like: `service_abc123`)

## Step 4: Create Email Template
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Name it: "Newsletter Welcome"
4. Use this simple template:

```html
<h2>Welcome to Loveworld Sons of Ministry!</h2>
<p>Hello {{to_name}},</p>
<p>Thank you for subscribing to our newsletter!</p>
<p>We're excited to share our latest insights, events, and spiritual content with you.</p>
<p>Stay tuned for updates about our services, special programs, testimonies, and ways to grow in faith together.</p>
<p>Blessings,<br>Loveworld Sons of Ministry Team</p>
```

5. Save and copy the **Template ID** (looks like: `template_abc123`)

## Step 5: Update Your Code
Replace the placeholder values in `src/components/Newsletter.tsx`:

```typescript
// Line 16: Replace YOUR_PUBLIC_KEY
const publicKey = "user_abc123def456"; // Your actual public key

// Line 30: Replace YOUR_SERVICE_ID  
const serviceId = 'service_abc123'; // Your actual service ID

// Line 31: Replace YOUR_TEMPLATE_ID
const templateId = 'template_abc123'; // Your actual template ID
```

## Step 6: Test
1. Save the file
2. Refresh your website
3. Try submitting an email in the newsletter section
4. Check if you receive the welcome email

## Need Help?
- Check the browser console (F12) for specific error messages
- Make sure all IDs are copied correctly
- Verify your email service is connected properly

## Alternative: Temporary Test Mode
If you want to test without setting up EmailJS right now, I can modify the component to just show a success message without actually sending emails. Let me know if you'd prefer this option!

