# 🚀 Contact Page - Quick Start Guide

Get the redesigned Contact page up and running in 5 minutes.

---

## 📋 Quick Overview

**What Changed:**
- ❌ Removed all cards, heavy containers, shadows
- ✅ Card-free, typographically elegant design
- ✅ Conversion-focused CTAs (Schedule, Email, LinkedIn, Résumé)
- ✅ Accessible form with inline validation
- ✅ Spam protection (honeypot + time heuristic)
- ✅ Subtle Progressive Blur background
- ✅ Success/error feedback messages

**File:** `/src/app/contact/page.tsx`

---

## 🎯 Key Features in 30 Seconds

### 1. **Primary CTAs** (Above the Fold)
```tsx
📅 Schedule a call    → Calendly link
📧 Email me          → mailto: link
💼 LinkedIn          → Profile link
📄 Download résumé   → PDF download
```

### 2. **Contact Form** (Minimal Friction)
```tsx
Name     → Required, text input
Email    → Required, validated
Purpose  → Optional dropdown (interview, consulting, etc.)
Message  → Required, textarea
```

### 3. **Spam Protection**
- Honeypot field (hidden from users)
- Time-to-submit heuristic (< 2 seconds = spam)
- Ready for Turnstile/reCAPTCHA

### 4. **Trust Builders**
```tsx
📍 Indore, India
🕐 IST (UTC+5:30)
✅ Usually replies within 1 business day
```

---

## ⚙️ Configuration (3 Steps)

### Step 1: Replace Placeholder Links

Open `/src/app/contact/page.tsx` and update:

```tsx
// Line ~235 - Calendly link
<a href="[ADD CALENDLY LINK]" ...>

// Replace with:
<a href="https://calendly.com/yourname/30min" ...>
```

### Step 2: Implement Form Submission

Choose one of two options:

#### Option A: EmailJS (No Backend)
```bash
npm install @emailjs/browser
```

```tsx
// In page.tsx, replace the TODO in handleSubmit:
import emailjs from '@emailjs/browser'

const submitForm = async (formData: FormState) => {
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
      from_name: formData.name,
      from_email: formData.email,
      purpose: formData.purpose,
      message: formData.message,
    },
    'YOUR_PUBLIC_KEY'
  )
}

// In handleSubmit, replace:
await new Promise((resolve) => setTimeout(resolve, 1500))
// with:
await submitForm(formState)
```

**EmailJS Setup:**
1. Sign up at emailjs.com
2. Create email service (Gmail, Outlook, etc.)
3. Create email template
4. Get Service ID, Template ID, Public Key

#### Option B: Next.js API Route
```tsx
// Create /src/app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  // Validate
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    )
  }

  // Send email via nodemailer, SendGrid, etc.
  // ...

  return NextResponse.json({ success: true })
}
```

```tsx
// In page.tsx handleSubmit, replace:
await new Promise((resolve) => setTimeout(resolve, 1500))
// with:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: formState.name,
    email: formState.email,
    purpose: formState.purpose,
    message: formState.message,
  }),
})

if (!response.ok) throw new Error('Submission failed')
```

### Step 3: Verify Contact Info

Check `/src/lib/constants.ts`:

```tsx
export const SITE_CONFIG = {
  email: "hellosanjaygautam@gmail.com",  // ✅ Correct
  phone: "+91-7000122621",               // ✅ Correct
  location: "Indore, India",             // ✅ Correct
  timezone: "IST (UTC+5:30)",            // ✅ Correct
  social: {
    linkedin: "https://www.linkedin.com/in/luv-jeri", // ⚠️ Update
    github: "[ADD GITHUB LINK]",         // ⚠️ Update
  },
}
```

---

## 🧪 Test the Page

### 1. Run Dev Server
```bash
npm run dev
```

### 2. Navigate to Contact Page
```
http://localhost:3000/contact
```

### 3. Test Form Validation
- Submit empty form → See error messages
- Enter invalid email → See email validation error
- Fill all required fields → Submit successfully

### 4. Test CTAs
- Click "Email me" → Opens mailto: link
- Click "LinkedIn" → Opens LinkedIn profile
- Click "Download résumé" → Downloads PDF
- Click "Schedule a call" → Opens Calendly (after configuring)

---

## 🎨 Visual Preview

### Hero Section
```
╔═══════════════════════════════════════════╗
║                                           ║
║    Let's build something                  ║
║    meaningful.                            ║
║                                           ║
║    I'm based in Indore (IST, UTC+5:30).   ║
║    I typically reply within 1 business    ║
║    day.                                   ║
║                                           ║
║    📅 Schedule a call →                   ║
║    📧 Email me →                          ║
║    💼 LinkedIn →                          ║
║    📄 Download résumé →                   ║
║                                           ║
╚═══════════════════════════════════════════╝
```

### Form Section
```
╔═══════════════════════════════════════════╗
║    Or send a message                      ║
║                                           ║
║    Name *          Email *                ║
║    ___________     ___________            ║
║                                           ║
║    How can I help?                        ║
║    [Select an option ▼]                   ║
║                                           ║
║    Message *                              ║
║    _______________________________        ║
║    _______________________________        ║
║    _______________________________        ║
║                                           ║
║    Send message → ✅ Message sent!        ║
║                                           ║
╚═══════════════════════════════════════════╝
```

### Footer Meta
```
╔═══════════════════════════════════════════╗
║  📍 Indore, India  •                      ║
║  🕐 IST (UTC+5:30) •                      ║
║  ✅ Usually replies within 1 business day ║
╚═══════════════════════════════════════════╝
```

---

## 🔍 Common Issues & Fixes

### Issue: Form submission doesn't work
**Fix:** Implement submitForm() backend (see Step 2)

### Issue: Calendly link shows placeholder
**Fix:** Replace `[ADD CALENDLY LINK]` with actual URL

### Issue: LinkedIn link incorrect
**Fix:** Update `SITE_CONFIG.social.linkedin` in constants.ts

### Issue: Email validation too strict
**Fix:** Adjust regex in `validateEmail()` function

### Issue: Success message doesn't disappear
**Fix:** Check the 5-second timeout in handleSubmit

---

## 📊 Analytics (Optional)

Track form performance:

```tsx
// In handleSubmit, after success:
gtag('event', 'form_submit', {
  event_category: 'Contact',
  event_label: formState.purpose || 'no_purpose',
})

// In CTA links:
<a
  href="..."
  onClick={() => {
    gtag('event', 'click', {
      event_category: 'Contact_CTA',
      event_label: 'Schedule Call',
    })
  }}
>
```

---

## ♿ Accessibility Checklist

Quick validation:

- [ ] Tab through all interactive elements (keyboard nav)
- [ ] Submit empty form → Error messages announced
- [ ] Focus visible on inputs (blue border)
- [ ] Screen reader test (VoiceOver/NVDA)
- [ ] Color contrast check (DevTools)

---

## 📱 Mobile Preview

Test on mobile:
```bash
# In dev server, access from phone on same network:
http://YOUR_IP:3000/contact

# Or use DevTools responsive mode
```

**Expected:**
- Single column layout
- Full-width CTAs (stacked)
- Touch-friendly input fields
- Readable text sizes

---

## 🚀 Production Checklist

Before deploying:

- [ ] Replace `[ADD CALENDLY LINK]`
- [ ] Implement form submission backend
- [ ] Update LinkedIn/GitHub URLs in constants.ts
- [ ] Test form submission end-to-end
- [ ] Verify email delivery
- [ ] Test on mobile device
- [ ] Check accessibility (keyboard nav, screen reader)
- [ ] Verify dark mode colors
- [ ] (Optional) Add analytics tracking
- [ ] (Optional) Add Turnstile/reCAPTCHA

---

## 📚 Need More Details?

See full documentation:
- [CONTACT_PAGE_REDESIGN_COMPLETE.md](./CONTACT_PAGE_REDESIGN_COMPLETE.md) - Complete technical reference
- [CONTACT_PAGE_VISUAL_GUIDE.md](./CONTACT_PAGE_VISUAL_GUIDE.md) - Design system details

---

**Quick Start Version:** 1.0
**Last Updated:** October 18, 2025
**Estimated Setup Time:** 5-10 minutes
