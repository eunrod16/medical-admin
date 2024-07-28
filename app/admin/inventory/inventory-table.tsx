'use client'; // Este componente es un componente de cliente
import  { useRef } from 'react';
import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody
} from '@/components/ui/table'; // Ajusta según tu estructura
import { updateSheetData } from './update-sheet';

interface InventoryTableClientProps {
  data: string[][];
}

export function InventoryTableClient({ data }: InventoryTableClientProps) {


  return (
    <form className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Medicamento</TableHead>
            <TableHead>Presentación</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Familia</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.slice(0).map((row: string[], rowIndex: number) => (
          <ProductRow rowIndex={rowIndex} row = {row} ></ProductRow>
          ))}
        </TableBody>
      </Table>
    </form>
  );
}


function ProductRow({rowIndex, row }: { rowIndex: number, row:string[] }) {



  var newValue = '';
  const updateProduct= updateSheetData.bind( null, rowIndex, newValue );

  return (
<TableRow key={rowIndex}>
              {row.map((cell: string, cellIndex: number) => (
                <TableCell key={cellIndex} className="font-medium">
                  {cellIndex === 2 ? (
                    <div>
                      {cell}
                      <input
                        type="text"
                        name="quantity"
                        value={newValue}
                        className="border p-1 rounded"
                      />
                      <button
                        formAction={updateProduct}
                        className="bg-blue-500 text-white p-1 rounded ml-2"
                      >
                        Save
                      </button>
                      </div>

                  ) : (
                    cell
                  )}
                </TableCell>
              ))}
            </TableRow>
  );
}


