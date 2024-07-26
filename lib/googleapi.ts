

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
  else{
    data = data.slice(4);
  }

  return data;
}

export async function updateSheetData(rowIndex: number, newValue: string) {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  
    const sheets = google.sheets({ version: 'v4', auth });
  
    // Ajusta el rango para que coincida con la fila que deseas actualizar
    const range = `adults!C${rowIndex + 2}`; // +2 si hay una fila de encabezado
  
    try {
      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.SPREADSHEET_ID as string,
        range,
        valueInputOption: 'RAW',
        requestBody: {
          values: [[newValue]],
        },
      });
    } catch (error) {
      console.error('Error updating sheet data:', error);
    }
  }
