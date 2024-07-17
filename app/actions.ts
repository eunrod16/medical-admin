'use server';

import { deleteUserById } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { asc } from 'drizzle-orm';
import { db, pacientes, createPatient } from '@/lib/db';

export async function deleteUser(userId: number) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}

export async function fetchUsers() {
  const moreUsers = await db.select().from(pacientes).orderBy(asc(pacientes.id)).limit(20);
  return { pacientes: moreUsers };
}


export async function register(formData: FormData) {
  let nombre = formData.get('name') as string;
  let direccion = formData.get('address') as string;
  let telefono = formData.get('phone') as string;
  let email = formData.get('email') as string;
  let option = formData.get('options') as string;
  let edad = formData.get('age') as string;
  let serial = formData.get('numero_paciente') as string;
  await createPatient(serial, nombre, direccion, email, telefono, option, edad);
}