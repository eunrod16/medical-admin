
import { InventoryTable } from 'app/admin/inventory/inventory-table';



export default async function InventoryPage() {


  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Lista Medicamentos</h1>
      </div>
      <InventoryTable  />

    </main>
  );
}
