// app/inventory/page.tsx
import { InventoryTable } from './inventory-table';
import { getSheetData } from '@/lib/googleapi';

export async function generateMetadata({ searchParams }: { searchParams: { searchA?: string } }) {
  const searchA = searchParams.searchA || '';
  return {
    props: {
      searchA
    }
  };
}

export default async function InventoryPage({ searchParams }: { searchParams: { searchA?: string } }) {
  const searchA = searchParams.searchA || '';
  const data = await getSheetData(process.env.SPREADSHEET_ID || '', 'adults!A:D', searchA);

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Lista Medicamentos</h1>
      </div>
      <form action="" method="get" className="mb-4">
        <input
          type="text"
          name="searchA"
          placeholder="Buscar en la columna A"
          defaultValue={searchA}
          className="border p-2 rounded mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Buscar</button>
      </form>
      <InventoryTable data={data} />
    </main>
  );
}
