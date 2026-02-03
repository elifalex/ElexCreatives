import { NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/googleSheets'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const timestamp = new Date().toISOString()

    if (data.userType === 'business') {
      // Business Owner Data
      await appendToSheet('Business Owners', [
        timestamp,
        data.name,
        data.email,
        data.businessName,
        data.businessType,
        data.location || '',
        data.instagram || '',
        'Organic Waitlist',
      ])
    } else if (data.userType === 'visitor') {
      // Visitor Data
      await appendToSheet('Visitors', [
        timestamp,
        data.name,
        data.email,
        data.visitorType, // Tourist, Digital Nomad, etc.
        data.interests || '',
        data.whenInDaNang || '',
        'Organic Waitlist',
      ])
    } else {
      return NextResponse.json(
        { error: 'Invalid user type' },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error submitting to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to submit' },
      { status: 500 }
    )
  }
}
