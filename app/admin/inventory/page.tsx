// app/inventory/page.tsx
import { InventoryTable } from './inventory-table';

export async function getServerSideProps(context: any) {
  const searchA = context.query.searchA || ''; // Obtener el término de búsqueda de la query string

  return {
    props: {
      searchA
    }
  };
}

export default function InventoryPage({ searchA }: { searchA: string }) {
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
      <InventoryTable searchA={searchA} />
    </main>
  );
}
