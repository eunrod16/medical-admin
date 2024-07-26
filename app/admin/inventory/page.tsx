'use client';

import { getSheetData } from '@/lib/googleapi';
import React, { useState, useEffect } from 'react';

const spreadsheetId = process.env.SPREADSHEET_ID || '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s';
const range = 'Sheet1!A1:E10';

export default function InventoryPage() {
  const [data, setData] = useState<string[][]>([]);
  const [searchA, setSearchA] = useState('');
  const [searchD, setSearchD] = useState('');

  useEffect(() => {
    async function fetchData() {
      const sheetData = await getSheetData(spreadsheetId, range);
      setData(sheetData);
    }
    fetchData();
  }, []);

  const handleSearchAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchA(e.target.value);
  };

  const handleSearchDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchD(e.target.value);
  };

  const filteredData = data.filter(row => {
    const matchesA = row[0]?.toLowerCase().includes(searchA.toLowerCase());
    const matchesD = row[3]?.toLowerCase().includes(searchD.toLowerCase());
    return matchesA && matchesD;
  });

  return (
    <div>
      <h1>Datos de Google Sheets</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar en Columna A"
          value={searchA}
          onChange={handleSearchAChange}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Buscar en Columna D"
          value={searchD}
          onChange={handleSearchDChange}
          style={{ padding: '5px' }}
        />
      </div>
      <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            {data[0]?.map((header, index) => (
              <th key={index} style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{ border: '1px solid black', padding: '8px' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
