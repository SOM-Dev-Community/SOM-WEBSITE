# EmailJS Troubleshooting Guide

## Current Error: "Email error: Unknown error occurred"

This error means EmailJS is failing to send the email. Let's troubleshoot step by step.

## Step 1: Check Browser Console

1. **Open your website** in the browser
2. **Press F12** to open Developer Tools
3. **Go to the Console tab**
4. **Try submitting the newsletter form**
5. **Look for these specific messages:**

### Expected Console Output:
```
EmailJS initialized successfully with key: lp-T_wwNEnJ1-va1g
EmailJS initialized: true
Service ID: service_its4zqj
Template ID: template_8z3vnhf
Sending welcome email with params: {...}
```

### If you see errors, they might be:
- `EmailJS initialized: false` - Initialization failed
- `Invalid service` - Service ID is wrong
- `Invalid template` - Template ID is wrong
- `Network error` - Connection issue

## Step 2: Verify EmailJS Dashboard

### Check Your Service:
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click **"Email Services"**
3. Verify `service_its4zqj` exists and is **connected**
4. If not connected, reconnect your email service

### Check Your Template:
1. Go to **"Email Templates"**
2. Verify `template_8z3vnhf` exists and is **published**
3. Check what variables your template expects

## Step 3: Test EmailJS Service

### Option A: Test in EmailJS Dashboard
1. Go to **"Email Templates"**
2. Click on your template `template_8z3vnhf`
3. Click **"Test"** button
4. Enter test data and send
5. Check if you receive the test email

### Option B: Check Template Variables
Your template might be expecting different variable names. Common variables:
- `{{to_name}}` or `{{user_name}}`
- `{{to_email}}` or `{{user_email}}`
- `{{message}}` or `{{content}}`

## Step 4: Common Issues & Solutions

### Issue 1: Service Not Connected
**Solution:** Reconnect your email service in EmailJS dashboard

### Issue 2: Template Not Published
**Solution:** Make sure your template is published/active

### Issue 3: Wrong Variable Names
**Solution:** Check what variables your template uses and update the code

### Issue 4: Free Plan Limits
**Solution:** Check if you've exceeded 200 emails/month limit

### Issue 5: Network Issues
**Solution:** Check your internet connection and try again

## Step 5: Quick Test

Try this simple test in your browser console:
```javascript
// Test EmailJS initialization
console.log('EmailJS available:', typeof emailjs !== 'undefined');

// Test sending a simple email
emailjs.send('service_its4zqj', 'template_8z3vnhf', {
  to_name: 'Test User',
  to_email: 'test@example.com',
  message: 'Test message'
}).then(
  function(response) {
    console.log('SUCCESS!', response);
  },
  function(error) {
    console.log('FAILED...', error);
  }
);
```

## Step 6: Alternative Solution

If EmailJS continues to fail, we can implement a fallback solution that:
1. Shows success message to user
2. Logs the subscription (without sending email)
3. Sends email later via a different method

## Next Steps

1. **Check the browser console** and share any error messages
2. **Verify your EmailJS dashboard** settings
3. **Test the template** in EmailJS dashboard
4. **Let me know what you find** and I'll help fix the specific issue

## Need Immediate Solution?

If you need the newsletter working right now, I can:
1. Remove EmailJS temporarily
2. Show success message to users
3. Store subscriptions for later email sending
4. Implement a different email solution

Let me know what you'd prefer!
