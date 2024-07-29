'use client'; // Este componente es un componente de cliente
import { useRef } from 'react';
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
  data: { row: string[], index: number }[];
}

export function InventoryTableClient({ data }: InventoryTableClientProps) {
  return (
    <form className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Medicamento</TableHead>
            <TableHead className="hidden md:table-cell">Presentación</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead className="hidden md:table-cell">Familia</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {data.map(({ row, index }) => (
            <ProductRow key={index} rowIndex={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </form>
  );
}

function ProductRow({ rowIndex, row }: { rowIndex: number; row: string[] }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const oldValue = parseInt(row[2]); // Almacena el valor antiguo
  const updateProduct = async () => {
    if (inputRef.current) {
      const newValue = parseInt(inputRef.current.value);
      await updateSheetData(rowIndex, newValue, oldValue);
    }
  };

  return (
    <TableRow key={rowIndex}>
      {row.map((cell: string, cellIndex: number) => {
        const className = cellIndex === 0 || cellIndex === 2 ? 'font-medium' : 'hidden md:table-cell';
        return (
          <TableCell key={cellIndex} className={className}>
            {cellIndex === 2 ? (
              <div>
                <p>Cantidad Actual: {cell}</p>
                <input
                  ref={inputRef}
                  type="number"
                  name="quantity"
                  className="border p-1 rounded"
                />
                <button
                  type="button"
                  onClick={updateProduct}
                  className="bg-blue-500 text-white p-1 rounded"
                >
                  Despachar
                </button>
              </div>
            ) : (
              cell
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
