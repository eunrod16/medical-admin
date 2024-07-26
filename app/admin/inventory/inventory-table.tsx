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
} from '@/components/ui/table'; // Ajusta según tu estructura

const spreadsheetId = process.env.SPREADSHEET_ID || '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s'; // Variable de entorno
const range = 'adults!A:D'; // Rango en la hoja de cálculo

export async function InventoryTable({ searchA }: { searchA: string }) {
  const data = await getSheetData(spreadsheetId, range, searchA);

  return (
    <form className="border shadow-sm rounded-lg">
      <input
        type="text"
        placeholder="Search Column A"
        value={searchA}
        readOnly
        className="border p-2 rounded mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            {data[4]?.map((header: string, index: number) => (
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

// app/inventory/page.tsx (Ruta del servidor)
export async function generateStaticParams() {
  // Generar parámetros estáticos si es necesario
  return [{ searchA: '' }];
}

export default async function Page({ searchA }: { searchA: string }) {
  return <InventoryTable searchA={searchA} />;
}
