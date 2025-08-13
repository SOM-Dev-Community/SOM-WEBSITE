# Backend Email Setup Guide

## 🚀 Complete Backend API + Email Service Setup

This guide will help you set up a professional email service for your newsletter using a Node.js backend with Nodemailer.

## 📋 Prerequisites

- Node.js installed on your computer
- A Gmail account (or other email provider)
- Basic knowledge of command line

## 🛠️ Step 1: Email Provider Setup (Gmail)

### 1.1 Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### 1.2 Generate App Password
1. Go to Google Account settings
2. Navigate to Security → 2-Step Verification
3. Click "App passwords"
4. Select "Mail" and "Other (Custom name)"
5. Name it "SOM Website Newsletter"
6. Copy the generated 16-character password

## 🔧 Step 2: Backend Configuration

### 2.1 Create Environment File
1. Navigate to the `backend` folder
2. Create a new file called `.env`
3. Add your email credentials:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password

# Server Configuration
PORT=5000
```

### 2.2 Install Dependencies
```bash
cd backend
npm install
```

### 2.3 Start the Backend Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

## 🧪 Step 3: Testing the Setup

### 3.1 Test Backend Health
1. Open your browser
2. Go to: `http://localhost:5000/api/health`
3. You should see: `{"status":"OK","message":"Server is running"}`

### 3.2 Test Newsletter API
1. Use a tool like Postman or curl
2. Send a POST request to: `http://localhost:5000/api/newsletter/subscribe`
3. Body (JSON):
```json
{
  "name": "Test User",
  "email": "your-email@gmail.com"
}
```

## 🌐 Step 4: Frontend Integration

### 4.1 Update API URL (if needed)
In `src/components/Newsletter.tsx`, the API URL is already configured:
- Development: `http://localhost:5000`
- Production: Update to your actual backend domain

### 4.2 Test the Complete Flow
1. Start your frontend: `npm run dev`
2. Start your backend: `cd backend && npm run dev`
3. Go to your website's newsletter section
4. Fill out the form and submit
5. Check your email for the welcome message

## 📧 Step 5: Email Customization

### 5.1 Customize Email Template
The email template is in `backend/server.js`. You can modify:
- Colors and styling
- Content and messaging
- Call-to-action buttons
- Footer information

### 5.2 Email Features
- ✅ Professional HTML email template
- ✅ Responsive design
- ✅ Branded styling
- ✅ Personalization with user's name
- ✅ Call-to-action button
- ✅ Unsubscribe information

## 🚀 Step 6: Production Deployment

### 6.1 Backend Deployment Options

#### Option A: Heroku
1. Create a Heroku account
2. Install Heroku CLI
3. Deploy:
```bash
cd backend
heroku create your-app-name
git add .
git commit -m "Initial backend deployment"
git push heroku main
```

#### Option B: Railway
1. Connect your GitHub repository
2. Railway will auto-deploy
3. Add environment variables in Railway dashboard

#### Option C: Vercel
1. Install Vercel CLI
2. Deploy:
```bash
cd backend
vercel
```

### 6.2 Environment Variables in Production
Set these in your hosting platform:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your app password
- `PORT`: Usually auto-set by hosting platform

### 6.3 Update Frontend API URL
Update the production API URL in `src/components/Newsletter.tsx`:
```typescript
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-domain.com' 
  : 'http://localhost:5000';
```

## 🔒 Step 7: Security & Best Practices

### 7.1 Environment Variables
- Never commit `.env` files to git
- Use different email accounts for development/production
- Rotate app passwords regularly

### 7.2 Rate Limiting (Optional)
Add rate limiting to prevent spam:
```bash
npm install express-rate-limit
```

### 7.3 Input Validation
The backend already includes:
- Email format validation
- Required field validation
- XSS protection

## 📊 Step 8: Monitoring & Analytics

### 8.1 Log Subscriptions
The backend logs all subscriptions to console. For production, consider:
- Database storage
- Email notifications to admin
- Analytics tracking

### 8.2 Error Monitoring
Consider adding:
- Sentry for error tracking
- Email notifications for failures
- Health check monitoring

## 🆘 Troubleshooting

### Common Issues:

#### 1. "Authentication failed" error
- Check your app password is correct
- Ensure 2FA is enabled
- Verify email address

#### 2. "Connection timeout" error
- Check your internet connection
- Verify Gmail SMTP settings
- Try different email provider

#### 3. "CORS error" in frontend
- Ensure backend is running on correct port
- Check CORS configuration in server.js

#### 4. "Email not received"
- Check spam folder
- Verify email address is correct
- Check backend console for errors

## 📞 Support

If you encounter issues:
1. Check the backend console for error messages
2. Verify all environment variables are set
3. Test the API endpoint directly
4. Check email provider settings

## 🎉 Success!

Once everything is working:
- Users can subscribe to your newsletter
- They receive professional welcome emails
- You have a scalable email system
- No more EmailJS limitations!

## 🔄 Next Steps

Consider adding:
- Database storage for subscribers
- Email templates for different content
- Unsubscribe functionality
- Newsletter sending capabilities
- Analytics and reporting
