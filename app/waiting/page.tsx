import { getUsers } from '@/lib/db';
import { UsersTable } from './paciente-tail';
import { Search } from './search';
import { Form } from './form';
import { SubmitButton } from './submit-button';
import { createPatient } from '@/lib/db';



export default async function IndexPage() {
  

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Sala de Espera</h1>
      </div>
      <UsersTable initialPacientes={pacientes} offset={newOffset} />

    </main>
  );
}
