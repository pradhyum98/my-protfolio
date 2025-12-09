# 📊 Google Analytics 4 Setup Guide

## ✅ What's Already Implemented

Your portfolio now has **full Google Analytics 4 integration** ready to activate:

- ✅ GA4 tracking scripts
- ✅ Automatic page view tracking
- ✅ Custom event tracking for:
  - Project views
  - Contact form submissions
  - Resume downloads
  - External link clicks
- ✅ TypeScript type safety
- ✅ Environment-based activation (production only)

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Admin** (bottom left)
3. Click **+ Create Property**
4. Enter:
   - **Property name:** Pradhyum Portfolio
   - **Timezone:** India Standard Time (IST)
   - **Currency:** Indian Rupee (INR)
5. Click **Next** → Choose industry category: **Technology**
6. Click **Create**

### Step 2: Get Your Measurement ID

1. After creating property, you'll see **Data Streams**
2. Click **Add stream** → **Web**
3. Enter:
   - **Website URL:** `https://pradhyum-data-analyst.vercel.app`
   - **Stream name:** Portfolio Website
4. Click **Create stream**
5. **Copy your Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/pradhyum-upadhyays-projects-f77d965b/pradhyum-portfolio/settings/environment-variables)
2. Click **Environment Variables** tab
3. Add new variable:
   - **Key:** `NEXT_PUBLIC_GA_ID`
   - **Value:** Your `G-XXXXXXXXXX` ID (paste what you copied)
   - **Environment:** Production, Preview, Development (check all)
4. Click **Save**

### Step 4: Redeploy

1. Go to **Deployments** tab
2. Click the **...** menu on latest deployment
3. Click **Redeploy**
4. Wait 2-3 minutes for deployment to complete

### Step 5: Verify It's Working

1. Visit your live site: `https://pradhyum-data-analyst.vercel.app`
2. Open browser **DevTools** (F12) → **Console** tab
3. You should see: No errors related to gtag
4. In Google Analytics → **Reports** → **Realtime**
5. You should see **1 active user** (you!)

---

## 📊 What Gets Tracked Automatically

### Page Views
- Every route change is tracked
- URL path and query parameters
- Referrer information

### Custom Events (Pre-configured)

```typescript
// When someone views a project
trackProjectView("HyreMe Analytics Dashboard")

// When contact form is submitted
trackContactFormSubmit()

// When resume is downloaded
trackResumeDownload()

// When external link is clicked
trackExternalLink("https://linkedin.com/in/pradhyum", "LinkedIn")
```

### Where to Use Custom Events

Add these to your components:

**In `src/app/projects/[slug]/page.tsx`:**
```typescript
import { trackProjectView } from '@/lib/analytics';

// Add in component
useEffect(() => {
  trackProjectView(project.title);
}, [project]);
```

**In `src/app/contact/page.tsx`:**
```typescript
import { trackContactFormSubmit } from '@/lib/analytics';

// In form submit handler
const handleSubmit = async (e) => {
  // ... your existing code
  trackContactFormSubmit();
  // ... rest of code
};
```

**For resume download button:**
```typescript
import { trackResumeDownload } from '@/lib/analytics';

<a 
  href="/resume.pdf" 
  onClick={trackResumeDownload}
  download
>
  Download Resume
</a>
```

---

## 📈 Key Metrics to Monitor

### Week 1-2: Initial Data
- **Total visitors**
- **Bounce rate** (should be < 60%)
- **Average session duration** (target: > 2 minutes)
- **Top pages** (which projects get most views)

### Month 1+: Growth Metrics
- **Organic search traffic** (from Google)
- **Traffic sources** (LinkedIn, GitHub, Direct)
- **User demographics** (location, device)
- **Conversion rate** (contact form submissions)

---

## 🎯 Recommended Goals to Set Up

Go to **Admin** → **Events** → **Create custom event**

### 1. Contact Form Goal
- Event name: `contact_form_submit`
- Mark as conversion: ✅ Yes

### 2. Resume Download Goal
- Event name: `resume_download`
- Mark as conversion: ✅ Yes

### 3. High Engagement Goal
- Condition: `session_duration > 180` (3 minutes)

---

## 🐛 Troubleshooting

**"Not seeing any data in Analytics"**
- Wait 24-48 hours for initial data
- Check Realtime reports (show data immediately)
- Verify `NEXT_PUBLIC_GA_ID` is set in Vercel
- Make sure you redeployed after adding environment variable

**"Getting TypeScript errors"**
- Already fixed! Type definitions are in `src/types/gtag.d.ts`

**"Want to test GA in development"**
- Change this line in `src/lib/analytics.ts`:
  ```typescript
  export const isGAEnabled = !!GA_TRACKING_ID; // Remove production check
  ```

---

## 🔒 Privacy & GDPR Compliance

✅ **Already implemented:**
- IP anonymization enabled
- Cookie flags set to `SameSite=None;Secure`
- Only loads in production (no tracking during development)

**Optional:** Add cookie consent banner using:
- [CookieYes](https://www.cookieyes.com/) (free tier)
- [Osano](https://www.osano.com/)

---

## 📚 Additional Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Vercel Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)
- [GA4 Reports Tutorial](https://support.google.com/analytics/answer/9212670)

---

## ✅ Next Steps After Setup

1. **Submit to Google Search Console**
   - Verify ownership
   - Submit sitemap: `https://pradhyum-data-analyst.vercel.app/sitemap.xml`

2. **Monitor Daily for First Week**
   - Check Realtime reports
   - Verify all events are firing
   - Review top pages

3. **Set Up Weekly Email Reports**
   - GA4 → **Library** → **Create Report**
   - Schedule email delivery

4. **Integrate with LinkedIn**
   - Add LinkedIn Insight Tag for career opportunities tracking

---

**Status:** 🟢 Ready to Activate  
**Effort Required:** 5 minutes (just add environment variable)  
**Expected Result:** Full visitor analytics within 24 hours
