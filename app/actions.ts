'use server';

import { deleteUserById } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { asc, eq, inArray, sql } from 'drizzle-orm';
import { db, pacientes, Paciente } from '@/lib/db';

export async function deleteUser(userId: number) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}

export async function fetchUsers() {
  const moreUsers = await db.select().from(pacientes).orderBy(asc(pacientes.id)).limit(20);
  return { pacientes: moreUsers };
}



 var pacientesTail: Paciente[] = [];
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
      id: pacientes.id,
      nombre: pacientes.nombre ?? '',
      medico: pacientes.medico ?? '',
      estado: pacientes.estado ?? '',
      direccion: pacientes.direccion ?? '',
      telefono: pacientes.telefono ?? '',
      email: pacientes.email ?? '',
      edad: pacientes.edad ?? '',
      serial: pacientes.serial ?? ''
    }).from(pacientes)
    .where(inArray(pacientes.id, listaPacientesIds));
  }
  console.log(pacientesTail)
  return  {pacientesTail: pacientesTail}
  }