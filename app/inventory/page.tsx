// app/inventory/page.tsx
import { getSheetData } from '@/lib/googleapi';
import React from 'react';

const spreadsheetId = process.env.SPREADSHEET_ID || '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s'; // Utiliza una variable de entorno para mayor flexibilidad
const range = 'adults!A:D'; // Cambia el rango según tu hoja de cálculo

export const revalidate = 60; // Opcional: Configura revalidación ISR (en segundos)

export default async function InventoryPage() {
  const data = await getSheetData(spreadsheetId, range);
  if (data){
    return (
        <div>
          <h1>Datos de Google Sheets</h1>
          <table>
            <thead>
              <tr>
                {data[4].map((header: string, index: number) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(5).map((row: string[], rowIndex: number) => (
                <tr key={rowIndex}>
                  {row.map((cell: string, cellIndex: number) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

  }


}
