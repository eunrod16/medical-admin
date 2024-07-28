'use server';

import { google } from 'googleapis';
import { revalidatePath } from 'next/cache';


  export async function updateSheetData(rowIndex: number, newValue: number, oldValue:number) {
    console.log("updateSheetData", rowIndex, newValue, oldValue)
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  
    const sheets = google.sheets({ version: 'v4', auth });
  
    // Ajusta el rango para que coincida con la fila que deseas actualizar
    const range = `adults!C${rowIndex+6 }`; // +2 si hay una fila de encabezado
  
    try {
      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.SPREADSHEET_ID as string,
        range,
        valueInputOption: 'RAW',
        requestBody: {
          values: [[newValue]],
        },
      })
      revalidatePath('/admin/inventory');
      ;
    } catch (error) {
      console.error('Error updating sheet data:', error);
    }
  }
