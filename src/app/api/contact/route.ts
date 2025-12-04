import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// ============================================================================
// RESEND CLIENT - Lazy initialization for build compatibility
// ============================================================================

let resendClient: Resend | null = null

const getResendClient = () => {
  if (!resendClient) {
    // Use environment variable if available, otherwise fallback to hardcoded key (for local dev)
    const apiKey = process.env.RESEND_API_KEY || 're_L2zeeW23_MYqEbyCmfq3ABHpZUX39g5xE'
    resendClient = new Resend(apiKey)
  }
  return resendClient
}

// ============================================================================
// REQUEST BODY TYPE
// ============================================================================

interface ContactFormData {
  name: string
  email: string
  purpose: string
  message: string
  honeypot?: string
}

// ============================================================================
// INPUT SANITIZATION
// ============================================================================

const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}

// ============================================================================
// EMAIL TEMPLATE
// ============================================================================

const createEmailHtml = (data: ContactFormData): string => {
  const purposeLabels: Record<string, string> = {
    interview: '💼 Interview Request',
    consulting: '🎯 Consulting / Architecture Review',
    performance: '⚡ Performance Rescue',
    general: '💬 General Inquiry',
    '': '📩 Not Specified',
  }

  const purposeLabel = purposeLabels[data.purpose] || data.purpose

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="min-width: 100%; background-color: #f4f4f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ef4444 100%); padding: 32px 40px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                📬 New Portfolio Contact
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                Someone reached out through your portfolio
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 32px 40px;">
              
              <!-- Purpose Badge -->
              <div style="margin-bottom: 24px;">
                <span style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500;">
                  ${purposeLabel}
                </span>
              </div>
              
              <!-- From Section -->
              <div style="margin-bottom: 24px; padding: 20px; background-color: #f8fafc; border-radius: 12px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; color: #64748b; font-weight: 600; letter-spacing: 0.5px;">
                  From
                </p>
                <p style="margin: 0; font-size: 18px; color: #1e293b; font-weight: 600;">
                  ${sanitizeInput(data.name)}
                </p>
                <a href="mailto:${sanitizeInput(data.email)}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">
                  ${sanitizeInput(data.email)}
                </a>
              </div>
              
              <!-- Message Section -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #64748b; font-weight: 600; letter-spacing: 0.5px;">
                  Message
                </p>
                <div style="padding: 20px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
                  <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.7; white-space: pre-wrap;">
${sanitizeInput(data.message)}
                  </p>
                </div>
              </div>
              
              <!-- Quick Reply Button -->
              <div style="text-align: center; padding-top: 16px;">
                <a href="mailto:${sanitizeInput(data.email)}?subject=Re: Your Portfolio Inquiry" 
                   style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                  Reply to ${sanitizeInput(data.name).split(' ')[0]} →
                </a>
              </div>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8; text-align: center;">
                This email was sent from your portfolio contact form<br>
                <span style="color: #64748b;">pradhyum98.github.io/my-protfolio</span>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

// ============================================================================
// POST HANDLER
// ============================================================================

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json()

    // Honeypot check (spam prevention)
    if (body.honeypot) {
      console.log('[Contact API] Honeypot triggered - rejecting submission')
      // Return success to not tip off bots
      return NextResponse.json({ success: true, id: 'blocked' })
    }

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!body.email?.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!body.message?.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Get Resend client
    const resend = getResendClient()

    // Determine subject based on purpose
    const purposeSubjects: Record<string, string> = {
      interview: 'Interview Request',
      consulting: 'Consulting Inquiry',
      performance: 'Performance Rescue Request',
      general: 'General Inquiry',
    }
    const subject = `Portfolio Contact: ${purposeSubjects[body.purpose] || 'New Message'}`

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['pradhyum2098@gmail.com'], // User requested email address
      replyTo: body.email,
      subject: subject,
      html: createEmailHtml(body),
    })

    if (error) {
      console.error('[Contact API] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      )
    }

    console.log('[Contact API] Email sent successfully:', data?.id)
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: data?.id,
    })

  } catch (error) {
    console.error('[Contact API] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
