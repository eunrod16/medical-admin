'use server';

import { deleteUserById } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { asc, eq, inArray, sql } from 'drizzle-orm';
import { db, pacientes } from '@/lib/db';

export async function deleteUser(userId: number) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}

export async function fetchUsers() {
  const moreUsers = await db.select().from(pacientes).orderBy(asc(pacientes.id)).limit(20);
  return { pacientes: moreUsers };
}

export type Paciente = {
  id: number;
  nombre: string | null;
  estado: string | null;
  medico: string | null;
  direccion: string | null;
  telefono: string | null;
  email: string | null;
  edad: string | null;
  serial: string | null;
};

export var pacientesTail: Paciente[] = [];
export async function fetchTail (){
  /*primero select min (paciente.id), paciente.medico
  group by paciente.medico
  where estado = En espera
  
  select pacientes
  where id (listaIds)
  */
  
  const tailIds = await db.select({
    idMin: sql<number>`min(${pacientes.id})`
  }).from(pacientes)
  .where(eq(pacientes.estado, "En Espera"))
  .groupBy(pacientes.medico);
  
  const listaPacientesIds = tailIds.map((paciente) => paciente.idMin);
  if (listaPacientesIds.length > 0) {
     pacientesTail = await db.select({
      nombre: pacientes.nombre,
      medico: pacientes.medico,
      estado: pacientes.estado
    }).from(pacientes)
    .where(inArray(pacientes.id, listaPacientesIds));
  }
  console.log(pacientesTail)
  return  {pacientesTail: pacientesTail}
  }