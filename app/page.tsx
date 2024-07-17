// Importa `useState` y otras dependencias al principio del archivo
import React, { useState } from 'react';
import { getUsers } from '@/lib/db';
import { UsersTable } from './users-table';
import { Search } from './search';
import { Form } from './form';
import { SubmitButton } from './submit-button';
import { createPatient } from '@/lib/db';

// Añadir 'use client' al principio del archivo para convertir el componente en un Componente de Cliente
'use client';

async function register(formData: FormData) {
  'use server';
  let nombre = formData.get('name') as string;
  let direccion = formData.get('address') as string;
  let telefono = formData.get('phone') as string;
  let email = formData.get('email') as string;
  let option = formData.get('options') as string;
  let edad = formData.get('age') as string;
  let serial = formData.get('numero_paciente') as string;
  await createPatient(serial, nombre, direccion, email, telefono, option, edad);
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { pacientes, newOffset } = await getUsers(search, Number(offset));

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Ingreso de Pacientes</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <UsersTable initialPacientes={pacientes} offset={newOffset} />
      <Form
        action={async (formData) => {
          try {
            await register(formData);
            setFormStatus('success');
          } catch {
            setFormStatus('error');
          }
        }}
      >
        <SubmitButton>Ingresar</SubmitButton>
        <p className="text-center text-sm text-gray-600">
          {'Already have an account? '}
          <a href="/login" className="font-semibold text-gray-800">
            Sign in
          </a>
          {' instead.'}
        </p>
      </Form>
      {formStatus === 'success' && <p className="text-green-600">Paciente registrado exitosamente!</p>}
      {formStatus === 'error' && <p className="text-red-600">Hubo un error al registrar el paciente.</p>}
    </main>
  );
}
