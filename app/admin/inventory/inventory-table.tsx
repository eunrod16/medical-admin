
'use client';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody
} from '@/components/ui/table'; // Ajusta según tu estructura
import { getSheetData } from '@/lib/googleapi'; // Ajusta según tu estructura

const spreadsheetId = process.env.SPREADSHEET_ID || '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s'; // Variable de entorno
const range = 'adults!A:D'; // Rango en la hoja de cálculo

export async function InventoryTable() {

        const data= await getSheetData(spreadsheetId, range); // Implement fetchUsers to get the latest data
  




  return (

      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
            {data && data[4].map((header: string, index: number) => (
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
