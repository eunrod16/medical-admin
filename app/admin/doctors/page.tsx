'use client';
import { getUsers } from '@/lib/db';
import { UsersTable } from 'app/admin/users-table-static';
import { Search } from 'app/admin/search';





export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { pacientes, newOffset } = await getUsers(search, Number(offset));



  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Listado de Pacientes por Médico</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <UsersTable pacientes={pacientes} offset={newOffset} search ={searchParams.q} />

    </main>
  );
}
