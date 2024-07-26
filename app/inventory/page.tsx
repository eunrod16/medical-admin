// pages/index.tsx
import { GetServerSideProps } from 'next';
import { getSheetData } from '@/lib/googleapi'
import React from 'react';

type Props = {
  data: string[][];
};

const Home: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Datos de Google Sheets</h1>
      <table>
        <thead>
          <tr>
            {data[4].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(5).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const spreadsheetId = '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s';
  const range = 'adults!A:D'; // Cambia el rango según tu hoja de cálculo

  const data = await getSheetData(spreadsheetId, range);

  return {
    props: {
      data,
    },
  };
};

export default Home;
