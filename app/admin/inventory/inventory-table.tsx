// app/inventory/inventory-table.tsx
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody
} from '@/components/ui/table'; // Ajusta según tu estructura
import { getSheetData } from '@/lib/googleapi'; // Ajusta según tu estructura

export async function InventoryTable({ searchA }: { searchA: string }) {
  const data = await getSheetData(process.env.SPREADSHEET_ID || '', 'adults!A:D', searchA);

  return (
    <form className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            {data[4]?.map((header: string, index: number) => (
              <TableHead key={index} >{header}</TableHead>
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
