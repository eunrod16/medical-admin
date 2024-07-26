// app/inventory/page.tsx
import { getSheetData } from '@/lib/googleapi';
import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody
} from '@/components/ui/table'; // Asegúrate de ajustar esta ruta según tu estructura de proyecto

const spreadsheetId = process.env.SPREADSHEET_ID || '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s'; // Utiliza una variable de entorno para mayor flexibilidad
const range = 'adults!A:D'; // Cambia el rango según tu hoja de cálculo

export const revalidate = 60; // Configura revalidación ISR (en segundos)

export default async function InventoryPage() {
  const data = await getSheetData(spreadsheetId, range);
  if (data){
    return (
      <div>
        <h1>Datos de Google Sheets</h1>
        <Table>
          <TableHead>
            <TableRow>
              {data[4].map((header: string, index: number) => (
                <TableHeader key={index} className="border border-black p-2">{header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(5).map((row: string[], rowIndex: number) => (
              <TableRow key={rowIndex}>
                {row.map((cell: string, cellIndex: number) => (
                  <TableCell key={cellIndex} className="border border-black p-2">{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
