import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Lazy initialize to avoid build-time errors
let resend: Resend | null = null

const getResendClient = () => {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

// ============================================================================
// TYPES
// ============================================================================

type ContactFormData = {
  name: string
  email: string
  purpose?: string
  message: string
  honeypot?: string
}

// ============================================================================
// VALIDATION
// ============================================================================

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const sanitizeInput = (input: string): string => {
  // Basic HTML/script tag removal
  return input.replace(/<[^>]*>/g, '').trim()
}

// ============================================================================
// POST HANDLER
// ============================================================================

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactFormData

    // Spam check: honeypot
    if (body.honeypot) {
      console.warn('[Contact API] Honeypot triggered')
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      )
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

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!body.message?.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const name = sanitizeInput(body.name)
    const email = sanitizeInput(body.email)
    const message = sanitizeInput(body.message)
    const purpose = body.purpose ? sanitizeInput(body.purpose) : ''

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('[Contact API] RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Get Resend client
    const resendClient = getResendClient()
    if (!resendClient) {
      console.error('[Contact API] Failed to initialize Resend client')
      return NextResponse.json(
        { error: 'Email service not available' },
        { status: 500 }
      )
    }

    // Format purpose label
    const purposeLabels: Record<string, string> = {
      interview: '💼 Interview request',
      consulting: '🎯 Consulting / Architecture review',
      performance: '⚡ Performance rescue',
      general: '💬 General inquiry',
    }
    const purposeLabel = purpose ? purposeLabels[purpose] || purpose : 'Not specified'

    // Send email using Resend
    const { data, error } = await resendClient.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use verified domain in production
      to: ['hellosanjaygautam@gmail.com'],
      replyTo: email,
      subject: `Portfolio Contact: ${purposeLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            </div>

            <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
              <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="margin-top: 0; color: #667eea; font-size: 20px;">Contact Details</h2>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057; width: 120px;">Name:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057;">Email:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                      <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-weight: 600; color: #495057;">Purpose:</td>
                    <td style="padding: 12px 0; color: #212529;">${purposeLabel}</td>
                  </tr>
                </table>
              </div>
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${purposeLabel}</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr />
          <p style="font-size: 12px; color: #888;">
            <p>This email was sent from your portfolio contact form at pradhyum.dev</p>
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Purpose: ${purposeLabel}

Message:
${message}

---
Reply to: ${email}
      `.trim(),
    })

    if (error) {
      console.error('[Contact API] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('[Contact API] Email sent successfully:', data?.id)

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
        id: data?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('[Contact API] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
