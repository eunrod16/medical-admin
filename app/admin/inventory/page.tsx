// app/inventory/page.tsx
import { InventoryTableClient } from './inventory-table';
import { getSheetData, getUniqueFamilies } from '@/lib/googleapi';

export async function generateMetadata({ searchParams }: { searchParams: { searchA?: string, searchB?: string } }) {
  const searchA = searchParams.searchA || '';
  const searchB = searchParams.searchB || '';
  return {
    props: {
      searchA, searchB
    }
  };
}

export default async function InventoryPage({ searchParams }: { searchParams: { searchA?: string, searchB?: string } }) {
  const searchA = searchParams.searchA || '';
  const searchB = searchParams.searchB || '';
  const data = await getSheetData(process.env.SPREADSHEET_ID || '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s', 'adults!A:D', searchA,searchB);
  const families = await getUniqueFamilies(process.env.SPREADSHEET_ID || '15P5ZQ2BGTqbl8qmkz2Vt1VOaKPFyx1Df2W_KPf0kT_s', 'adults!D:D');


  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Lista Medicamentos</h1>
      </div>
      <form action="" method="get" className="mb-4">
        <input
          type="text"
          name="searchA"
          placeholder="Buscar medicamento"
          className="border p-2 rounded mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Buscar</button>
      </form>
      <form action="" method="get" className="mb-4">
        <select
          name="searchB"
          className="border p-2 rounded mb-4 text-sm"
        >
          <option value="">Seleccionar familia</option>
          {families.map((family, index) => (
            <option key={index} value={family}>{family}</option>
          ))}

        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Buscar</button>
      </form>
      <InventoryTableClient data={data} />
    </main>
  );
}