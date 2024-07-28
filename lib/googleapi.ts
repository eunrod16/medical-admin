

// lib/googleapi.ts
import { google } from 'googleapis';



export async function getUniqueFamilies(spreadsheetId: string, range: string) {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const data = response.data.values || [];
  console.log("uniqueFamilies-data",data);
  const families = data.slice(1).map(row => row[3]); // Obtener valores de la columna D (índice 3)
  console.log("uniqueFamilies-families",families)
  const uniqueFamilies: string[] = []; // Array para almacenar los valores únicos

  // Recorrer los datos y agregar solo valores únicos al array
  families.forEach(family => {
    if (family && !uniqueFamilies.includes(family)) {
      uniqueFamilies.push(family);
    }
  });
  console.log("uniqueFamilies",uniqueFamilies);

  return uniqueFamilies;
}



export async function getSheetData(spreadsheetId: string, range: string, searchA: string = '', searchB: string = '') {
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
  
    // Crear un array con objetos que contengan la fila y el índice
    let result = data.map((row, index) => ({ row, index: index + 1 }));
  
    // Filtrar los datos si hay un término de búsqueda
    if (searchA) {
      result = result.filter(({ row }) => row[0]?.toLowerCase().includes(searchA.toLowerCase()));
    }
    else if (searchB) {
        result = result.filter(({ row }) => row[3]?.toLowerCase().includes(searchB.toLowerCase()));
    }
     else {
      result = result.slice(5).map(({ row, index }) => ({ row, index: index  }));
    }
    console.log("result",result)
  
    return result;
  }


export async function updateSheetData(rowIndex: number, newValue: string) {
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
      });
    } catch (error) {
      console.error('Error updating sheet data:', error);
    }
  }
