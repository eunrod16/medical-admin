

// lib/googleapi.ts
import { google } from 'googleapis';

export async function getSheetData(spreadsheetId: string, range: string, searchA: string = '') {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  let data = response.data.values || [];

  // Filtrar los datos si hay un término de búsqueda
  if (searchA) {
    data = data.filter(row => row[0]?.toLowerCase().includes(searchA.toLowerCase()));
  }

  return data;
}
