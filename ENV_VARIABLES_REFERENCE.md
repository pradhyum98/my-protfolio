# Environment Variables Reference

To enable full functionality on Vercel, you need to set the following environment variables in your Vercel Project Settings:

## Required

### 1. Google Analytics
**Key:** `NEXT_PUBLIC_GA_ID`
**Value:** `G-XXXXXXXXXX` (Your Google Analytics 4 Measurement ID)
**Purpose:** Enables visitor tracking and event analytics.

### 2. Resend API Key (Optional but recommended for Production)
**Key:** `RESEND_API_KEY`
**Value:** `re_...` (Your Resend API Key)
**Purpose:** Sends contact form emails.
*Note: The code currently has a fallback key, but for security, you should use your own environment variable in production.*

## How to Set on Vercel
1. Go to your Vercel Dashboard
2. Select your project (`pradhyum-portfolio`)
3. Go to **Settings** > **Environment Variables**
4. Add the keys and values listed above.
5. **Redeploy** your project for changes to take effect.
