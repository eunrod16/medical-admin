import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody
} from '@/components/ui/table'; // Ajusta según tu estructura
import { updateSheetData } from '@/lib/googleapi';

export function InventoryTable({ data }: { data: string[][] }) {
  const [editableRowIndex, setEditableRowIndex] = useState<number | null>(null);
  const [editedValue, setEditedValue] = useState<string>('');

  // Función para iniciar la edición
  const handleEditClick = (rowIndex: number, currentValue: string) => {
    setEditableRowIndex(rowIndex);
    setEditedValue(currentValue);
  };

  // Función para guardar la edición
  const handleSaveClick = async (rowIndex: number) => {
    if (editableRowIndex !== null) {
      await updateSheetData(rowIndex, editedValue);
      setEditableRowIndex(null);
    }
  };

  // Función para manejar cambios en el campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(event.target.value);
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
          {data.map((row: string[], rowIndex: number) => (
            <TableRow key={rowIndex}>
              {row.map((cell: string, cellIndex: number) => (
                <TableCell key={cellIndex} className="font-medium">
                  {cellIndex === 2 && rowIndex === editableRowIndex ? (
                    <input
                      type="text"
                      value={editedValue}
                      onChange={handleInputChange}
                      className="border p-1 rounded"
                    />
                  ) : (
                    cell
                  )}
                </TableCell>
              ))}
              <TableCell>
                {rowIndex === editableRowIndex ? (
                  <button
                    type="button"
                    onClick={() => handleSaveClick(rowIndex)}
                    className="bg-blue-500 text-white p-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleEditClick(rowIndex, row[2])}
                    className="bg-green-500 text-white p-1 rounded"
                  >
                    Edit
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </form>
  );
}
