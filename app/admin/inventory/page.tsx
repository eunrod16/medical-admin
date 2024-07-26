import { simpleUsers } from '@/lib/db';
import { InventoryTable } from 'app/admin/inventory/inventory-table';
import { auth, signOut } from 'app/auth';


export default async function InventoryPage() {
  let session = await auth();
  const { pacientes } = await simpleUsers();

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Lista Medicamentos</h1>
      </div>
      <InventoryTable  />

    </main>
  );
}
