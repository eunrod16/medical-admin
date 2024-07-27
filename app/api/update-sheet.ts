import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { rowIndex, newValue } = req.body;

  if (typeof rowIndex !== 'number' || typeof newValue !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const range = `adults!C${rowIndex + 2}`; // Ajusta el rango según tu hoja de cálculo

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.SPREADSHEET_ID as string,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[newValue]],
      },
    });
    res.status(200).json({ message: 'Update successful' });
  } catch (error) {
    console.error('Error updating sheet:', error);
    res.status(500).json({ error: 'Failed to update sheet' });
  }
}
