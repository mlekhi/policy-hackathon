import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Initialize auth client
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

export async function POST(req: Request) {
  try {
    // Log environment variables (without sensitive data)
    console.log('Checking environment variables:');
    console.log('GOOGLE_SHEETS_ID exists:', !!process.env.GOOGLE_SHEETS_ID);
    console.log('GOOGLE_SHEETS_CLIENT_EMAIL exists:', !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL);
    console.log('GOOGLE_SHEETS_PRIVATE_KEY exists:', !!process.env.GOOGLE_SHEETS_PRIVATE_KEY);

    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('Received email submission:', email);

    // Get the current timestamp
    const timestamp = new Date().toISOString();

    try {
      // Initialize the sheet
      console.log('Initializing Google Sheet...');
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID!, serviceAccountAuth);
      await doc.loadInfo();
      
      // Get the first sheet
      console.log('Accessing first sheet...');
      const sheet = doc.sheetsByIndex[0];
      
      // Add the row
      console.log('Adding row to sheet...');
      await sheet.addRow({
        Timestamp: timestamp,
        Email: email
      });
      
      console.log('Successfully added email to sheet');
      return NextResponse.json(
        { message: 'Successfully added to waitlist' },
        { status: 200 }
      );
    } catch (sheetError) {
      console.error('Google Sheets error:', sheetError);
      return NextResponse.json(
        { error: 'Failed to save to waitlist: ' + (sheetError instanceof Error ? sheetError.message : 'Unknown error') },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json(
      { error: 'Failed to process request: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
} 