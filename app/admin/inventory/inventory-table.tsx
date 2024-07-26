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


  return (
    <div>
      <div className="mb-4">

      </div>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
             
            </TableRow>
          </TableHeader>
          <TableBody>
            
          </TableBody>
        </Table>
      </form>
    </div>
  );
}
