// pages/api/sheetData.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSheetData } from '@/lib/googleapi';

const spreadsheetId = process.env.SPREADSHEET_ID || '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s';
const range = 'adults!A:D';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { searchA = '', searchD = '' } = req.query;

  try {
    const sheetData = await getSheetData(spreadsheetId, range);

    const filteredData = sheetData.filter(row => {
      const matchesA = row[0]?.toLowerCase().includes((searchA as string).toLowerCase());
      const matchesD = row[3]?.toLowerCase().includes((searchD as string).toLowerCase());
      return matchesA && matchesD;
    });

    res.status(200).json(filteredData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
