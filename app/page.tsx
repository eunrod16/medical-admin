import { getUsers } from '@/lib/db';
import { UsersTable } from './users-table';
import { Search } from './search';
import { Form } from './form';
import { SubmitButton } from './submit-button';
import { createPatient } from '@/lib/db';

async function register(formData: FormData) {
  'use server';
  let nombre = formData.get('name') as string;
  let direccion = formData.get('address') as string;
  let telefono = formData.get('phone') as string;
  let email = formData.get('email') as string;
  let option = formData.get('options') as string;
  let edad = formData.get('age') as string;
  await createPatient(nombre,direccion, email, telefono,option,edad );


}


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
        <h1 className="font-semibold text-lg md:text-2xl">Ingreso de Pacientes</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <UsersTable pacientes={pacientes} offset={newOffset} />
      <Form action={register}>
          <SubmitButton>Ingresar</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <a href="/login" className="font-semibold text-gray-800">
              Sign in
            </a>
            {' instead.'}
          </p>
        </Form>
    </main>
  );
}
