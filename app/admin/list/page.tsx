import { simpleUsers } from '@/lib/db';
import { UsersTable } from 'app/admin/users-table';
import { auth, signOut } from 'app/auth';


export default async function IndexPage() {
  let session = await auth();
  const { pacientes } = await simpleUsers();

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Lista Pacientes</h1>
      </div>
      <UsersTable initialPacientes={pacientes} offset={null}  />

    </main>
  );
}
