// pages/inventory.tsx
import { getSheetData } from '@/lib/googleapi';
import { GetServerSideProps } from 'next';
import React from 'react';

const spreadsheetId = process.env.SPREADSHEET_ID || '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s';
const range = 'Sheet1!A1:E10';

interface InventoryPageProps {
  data: string[][];
  searchA: string;
  searchD: string;
}

const InventoryPage: React.FC<InventoryPageProps> = ({ data, searchA, searchD }) => {
  return (
    <div>
      <h1>Datos de Google Sheets</h1>
      <form method="GET">
        <input
          type="text"
          name="searchA"
          placeholder="Buscar en Columna A"
          defaultValue={searchA}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          name="searchD"
          placeholder="Buscar en Columna D"
          defaultValue={searchD}
          style={{ padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px', marginLeft: '10px' }}>Buscar</button>
      </form>
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
          {data.slice(1).map((row, rowIndex) => (
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
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { searchA = '', searchD = '' } = context.query;

  const sheetData = await getSheetData(spreadsheetId, range);

  const filteredData = sheetData.filter(row => {
    const matchesA = row[0]?.toLowerCase().includes((searchA as string).toLowerCase());
    const matchesD = row[3]?.toLowerCase().includes((searchD as string).toLowerCase());
    return matchesA && matchesD;
  });

  return {
    props: {
      data: filteredData,
      searchA,
      searchD,
    },
  };
};

export default InventoryPage;
