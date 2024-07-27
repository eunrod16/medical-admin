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

interface InventoryTableClientProps {
  data: string[][];
}

export function InventoryTableClient({ data }: InventoryTableClientProps) {


  const handleFormSubmit = async (event: React.FormEvent) => {
    console.log("handleFormSubmit");
    //event.preventDefault();
   // const formData = new FormData(event.currentTarget);
    //const newValue = formData.get('quantity') as string;

   // await handleEditClick(rowIndex, newValue);
  };
  const formRef = useRef<HTMLFormElement>(null);

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
                    <form ref={formRef}
                    onSubmit={handleFormSubmit} 
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
