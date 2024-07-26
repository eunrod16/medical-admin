// app/inventory/page.tsx
'use client';
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

export default async function InventoryTable() {
  const data = await getSheetData(spreadsheetId, range);
  if (data){
    return (
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              {data[4].map((header: string, index: number) => (
                <TableHead key={index} className="max-w-[150px]">{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.slice(5).map((row: string[], rowIndex: number) => (
              <TableRow key={rowIndex}>
                {row.map((cell: string, cellIndex: number) => (
                  <TableCell key={cellIndex} className="font-medium">{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </form>
    );

  }
}
