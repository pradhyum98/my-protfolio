# Email Integration Setup Guide

This guide will help you set up the email functionality for your portfolio contact page.

## 🎉 What's Been Implemented

### ✅ Features Added

1. **Contact Form Email Integration**
   - Real email sending via Resend API
   - Validation for name, email, and message
   - Honeypot spam protection
   - Time-based spam prevention
   - Beautiful HTML email templates
   - Success/error feedback

2. **Schedule a Call Feature**
   - Dedicated form for scheduling calls
   - Fields: Name, Email, Phone (optional), Preferred Time (optional), Description
   - Separate email notifications with distinct styling
   - All data sent to your email (hellosanjaygautam@gmail.com)

3. **Security & Validation**
   - Input sanitization to prevent XSS attacks
   - Email format validation
   - Required field validation
   - Honeypot fields for bot detection
   - Submission timing checks

## 🚀 Setup Instructions

### Step 1: Sign Up for Resend

1. Go to [resend.com](https://resend.com)
2. Create a free account (100 emails/day on free tier)
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to Resend dashboard
2. Navigate to [API Keys](https://resend.com/api-keys)
3. Click "Create API Key"
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (it will only be shown once!)

### Step 3: Configure Environment Variables

1. Open `.env.local` in your project root
2. Replace `your_resend_api_key_here` with your actual API key:

```env
RESEND_API_KEY=re_123abc456def789ghi
```

3. Save the file

### Step 4: Domain Verification (Optional but Recommended)

For production, you should verify your domain:

1. Go to Resend Dashboard → [Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Follow the DNS verification steps
4. Once verified, update the `from` field in both API routes:

**Update these files:**
- `src/app/api/contact/route.ts` (line ~96)
- `src/app/api/schedule-call/route.ts` (line ~95)

Change:
```typescript
from: 'Portfolio Contact <onboarding@resend.dev>',
```

To:
```typescript
from: 'Portfolio Contact <noreply@yourdomain.com>',
```

### Step 5: Test Locally

1. Start your development server:
```bash
yarn dev
```

2. Navigate to `http://localhost:3000/contact`
3. Fill out the contact form and submit
4. Check your email at hellosanjaygautam@gmail.com
5. Test the "Schedule a Call" form as well

### Step 6: Deploy to Production

1. Add `RESEND_API_KEY` to your deployment environment variables:

**Vercel:**
```bash
vercel env add RESEND_API_KEY
```

Or add it via the Vercel Dashboard:
- Go to your project → Settings → Environment Variables
- Add `RESEND_API_KEY` with your API key value

**Other platforms:**
- Add the environment variable according to your platform's documentation

2. Deploy your application:
```bash
git add .
git commit -m "Add email functionality to contact page"
git push
```

## 📧 Email Templates

### Contact Form Email
- Subject: "Portfolio Contact: [Purpose]"
- Beautiful gradient header (purple)
- Includes: Name, Email, Purpose, Message
- Reply-to set to user's email

### Schedule a Call Email
- Subject: "Schedule a Call Request"
- Beautiful gradient header (pink/red)
- Includes: Name, Email, Phone (optional), Preferred Time (optional), Description
- Reply-to set to user's email

## 🔧 API Routes Created

### `/api/contact` (POST)
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "purpose": "consulting",
  "message": "I'd like to discuss a project...",
  "honeypot": ""
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "email_id_from_resend"
}
```

### `/api/schedule-call` (POST)
Handles schedule a call requests.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1 555 123 4567",
  "preferredTime": "Weekdays 2-4 PM IST",
  "description": "I'd like to discuss architecture review...",
  "honeypot": ""
}
```

**Response:**
```json
{
  "success": true,
  "message": "Call request sent successfully",
  "id": "email_id_from_resend"
}
```

## 🛡️ Security Features

1. **Honeypot Field**: Hidden field that bots fill out but humans don't
2. **Time Check**: Prevents submissions faster than 2 seconds (bot behavior)
3. **Input Sanitization**: Removes HTML/script tags from all inputs
4. **Email Validation**: Regex validation for proper email format
5. **Server-side Validation**: All validation happens on the server
6. **Environment Variables**: API keys never exposed to client

## 🐛 Troubleshooting

### Emails not sending?

1. **Check API Key**: Make sure `RESEND_API_KEY` is set correctly in `.env.local`
2. **Check Console**: Look for error messages in the browser console and server logs
3. **Check Resend Dashboard**: Log in to Resend and check the Logs section
4. **Check Spam Folder**: Sometimes emails land in spam initially
5. **Rate Limits**: Free tier has 100 emails/day limit

### API Route not found?

1. Make sure you've created both files:
   - `src/app/api/contact/route.ts`
   - `src/app/api/schedule-call/route.ts`
2. Restart your development server

### TypeScript errors?

1. Make sure Resend is installed:
```bash
yarn add resend
```

## 📊 Monitoring

You can monitor email delivery in the Resend dashboard:
1. Go to [resend.com/emails](https://resend.com/emails)
2. View all sent emails, delivery status, and errors
3. Click on any email to see full details

## 💡 Future Enhancements

Consider adding:
- ✨ Rate limiting per IP address
- 📊 Analytics tracking for form submissions
- 🔔 Slack/Discord notifications
- 📧 Auto-reply emails to users
- 💾 Database storage of form submissions
- 🤖 reCAPTCHA integration
- 📝 Form submission history in a dashboard

## 📝 Files Modified/Created

### Created:
- `src/app/api/contact/route.ts` - Contact form API endpoint
- `src/app/api/schedule-call/route.ts` - Schedule call API endpoint
- `.env.local` - Environment variables
- `EMAIL_SETUP_GUIDE.md` - This guide

### Modified:
- `src/app/contact/page.tsx` - Added working email integration and Schedule a Call form
- `package.json` - Added Resend dependency

## 🎯 Testing Checklist

Before going live, test:

- [ ] Contact form with valid data → Should receive email
- [ ] Contact form with invalid email → Should show error
- [ ] Contact form with empty fields → Should show validation errors
- [ ] Schedule a Call form with all fields → Should receive email
- [ ] Schedule a Call form with only required fields → Should receive email
- [ ] Schedule a Call form with invalid email → Should show error
- [ ] Both forms on mobile devices
- [ ] Both forms with keyboard navigation only
- [ ] Spam protection (fill honeypot) → Should silently reject
- [ ] Quick submission (< 2 seconds) → Should silently reject

## 📞 Support

If you encounter any issues:
1. Check the [Resend Documentation](https://resend.com/docs)
2. Review the [Resend Status Page](https://status.resend.com/)
3. Contact Resend support via their dashboard

---

**Happy emailing! 🚀**
