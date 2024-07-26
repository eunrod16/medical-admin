// lib/googleSheets.ts
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const keyFilePath = path.join(process.cwd(), 'credentials.json');

export async function getSheetData(spreadsheetId: string, range: string) {
  const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  return response.data.values;
}
