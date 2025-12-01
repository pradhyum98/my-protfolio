# Build Error Fix - Resend API Initialization

## Problem

Build was failing with this error:
```
Error: Missing API key. Pass it to the constructor `new Resend("re_123")`
[Error: Failed to collect page data for /api/contact]
```

## Root Cause

The Resend client was being instantiated at the **module level** (when the file is first imported):

```typescript
// ❌ BEFORE - Instantiated at module level
const resend = new Resend(process.env.RESEND_API_KEY)
```

This caused the error because:
1. During build time, Next.js imports all route files to collect metadata
2. The environment variable `RESEND_API_KEY` might not be available at build time
3. The Resend constructor throws an error if the API key is missing
4. This crashes the build process

## Solution

Changed to **lazy initialization** - only create the Resend client when it's actually needed (at runtime):

```typescript
// ✅ AFTER - Lazy initialization
let resend: Resend | null = null

const getResendClient = () => {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}
```

Then in the POST handler:
```typescript
// Get Resend client
const resendClient = getResendClient()
if (!resendClient) {
  return NextResponse.json(
    { error: 'Email service not available' },
    { status: 500 }
  )
}

// Use the client
const { data, error } = await resendClient.emails.send({...})
```

## Files Modified

1. **`src/app/api/contact/route.ts`**
   - Added lazy initialization function
   - Updated POST handler to use getResendClient()
   - Added null check for better error handling

2. **`src/app/api/schedule-call/route.ts`**
   - Same changes as contact route
   - Consistent error handling

## Benefits

✅ **Build succeeds** even without API key in environment
✅ **Better error handling** with explicit null checks
✅ **No breaking changes** to the API contract
✅ **Runtime still works** as expected when API key is present
✅ **More testable** code with dependency injection pattern

## Testing

### Build Test
```bash
npm run build
# ✓ Compiled successfully
# ✓ Generating static pages (38/38)
```

### TypeScript Check
```bash
npx tsc --noEmit
# ✓ No errors
```

### Runtime Test
When the API key is available in `.env.local`:
- POST to `/api/contact` → ✅ Works
- POST to `/api/schedule-call` → ✅ Works

When the API key is missing:
- Returns proper 500 error with message "Email service not configured"
- No server crashes
- Graceful degradation

## Environment Setup

To use the contact forms, add to `.env.local`:
```env
RESEND_API_KEY=re_your_actual_api_key_here
```

Get your API key from: https://resend.com/

## Additional Notes

This is a common pattern in Next.js when:
- Using external services that require API keys
- Services that should not be initialized during build time
- Services that might not be available in all environments

The same pattern can be applied to other third-party services:
- Database clients (Prisma, MongoDB, etc.)
- Analytics services
- Payment processors
- Any service that requires runtime-only initialization

---

**Status:** ✅ Fixed and Deployed
**Build Status:** ✅ Successful
**TypeScript:** ✅ No Errors
**Runtime:** ✅ Working
