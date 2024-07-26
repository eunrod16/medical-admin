'use client';

import React, { useEffect, useState } from 'react';
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

export function InventoryTable() {
  const [data, setData] = useState<string[][] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchA, setSearchA] = useState<string>('');
  const [searchD, setSearchD] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const sheetData = await getSheetData(spreadsheetId, range);
        setData(sheetData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredData = data?.filter(row => {
    const [colA, , , colD] = row;
    return (
      (searchA ? colA?.toLowerCase().includes(searchA.toLowerCase()) : true) &&
      (searchD ? colD?.toLowerCase().includes(searchD.toLowerCase()) : true)
    );
  });

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Column A"
          value={searchA}
          onChange={(e) => setSearchA(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Search Column D"
          value={searchD}
          onChange={(e) => setSearchD(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
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
            {filteredData?.slice(5).map((row: string[], rowIndex: number) => (
              <TableRow key={rowIndex}>
                {row.map((cell: string, cellIndex: number) => (
                  <TableCell key={cellIndex} className="font-medium">{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </form>
    </div>
  );
}
