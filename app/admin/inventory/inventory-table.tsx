'use client'; // Esto indica que este es un componente de cliente

import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody
} from '@/components/ui/table'; // Ajusta según tu estructura
import { updateSheetData } from 'app/admin/inventory/update-sheet';

export function InventoryTableClient({ data }: { data: string[][] }) {
  const handleEditClick = async (rowIndex: number, newValue: string) => {
    const response = await fetch('/admin/inventory/update-sheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rowIndex,
        newValue,
      }),
    });

    if (!response.ok) {
      console.error('Error updating sheet data');
    } else {
      alert('Data updated successfully');
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>, rowIndex: number) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newValue = formData.get('quantity') as string;

    await updateSheetData(rowIndex, newValue);
  };

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
            <TableRow key={rowIndex}>
              {row.map((cell: string, cellIndex: number) => (
                <TableCell key={cellIndex} className="font-medium">
                  {cellIndex === 2 ? (
                    <form
                      onSubmit={(e) => handleFormSubmit(e, rowIndex)}
                      className="flex items-center"
                    >
                      <input
                        type="text"
                        name="quantity"
                        defaultValue={cell}
                        className="border p-1 rounded"
                      />
                      <button
                        type="submit"
                        className="bg-blue-500 text-white p-1 rounded ml-2"
                      >
                        Save
                      </button>
                    </form>
                  ) : (
                    cell
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </form>
  );
}
