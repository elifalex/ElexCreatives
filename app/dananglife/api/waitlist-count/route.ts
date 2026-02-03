import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

    if (!spreadsheetId) {
      return NextResponse.json({
        count: 140,
        debug: {
          hasEmail: !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          hasKey: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY,
          hasId: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        }
      })
    }

    // Fetch both sheets
    const [businessOwners, visitors] = await Promise.all([
      sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Business Owners!A:A',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Visitors!A:A',
      }),
    ])

    // Count rows (minus header row)
    const businessCount = (businessOwners.data.values?.length || 1) - 1
    const visitorCount = (visitors.data.values?.length || 1) - 1

    // Total count + 140 starting number
    const totalCount = businessCount + visitorCount + 140

    return NextResponse.json({ count: totalCount })
  } catch (error) {
    return NextResponse.json({ count: 140, error: (error as Error).message }, { status: 200 })
  }
}
