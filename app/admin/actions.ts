'use server';

import { deleteUserById, updateStatusbyId, getUsers } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { asc, eq, inArray, sql } from 'drizzle-orm';
import { db, pacientes, Paciente } from '@/lib/db';
import { serialize } from 'v8';

export async function deleteUser(userId: number) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}

export async function updatePatient(id: number, search:string|null, status:string) {
  var paramSearch = ''
  if (search!= null) paramSearch = search
   await updateStatusbyId(id, status);
   revalidatePath('/admin/doctors?q='.concat(paramSearch));
}

export async function fetchUsers() {
  const moreUsers = await db.select().from(pacientes).orderBy(asc(pacientes.id));
  return { pacientes: moreUsers };
}

export async function reloadgetUsers(q: string| null){
  var search =''
  if (q != null) search = q
  const offset = 0
  const { pacientes, newOffset } = await getUsers(search, Number(offset));
  return {pacientes:pacientes}
}




export async function fetchTail (){
  var pacientesTail: Paciente[] = [];
  /*primero select min (paciente.id), paciente.medico
  group by paciente.medico
  where estado = En espera
  
  select pacientes
  where id (listaIds)
  */
  
  var tailIds = await db.select({
    idMin: sql<number>`min(${pacientes.id})`
  }).from(pacientes)
  .where(eq(pacientes.estado, "Atender"))
  .groupBy(pacientes.medico);

  console.log(tailIds);
  
  var listaPacientesIds = tailIds.map((paciente) => paciente.idMin);
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
      serial: pacientes.serial ?? '',
      peso: pacientes.peso ?? '',
      pulso: pacientes.pulso ?? '',
      temperatura: pacientes.temperatura ?? '',
      presion: pacientes.presion ?? ''
    }).from(pacientes)
    .where(inArray(pacientes.id, listaPacientesIds))
    .orderBy(pacientes.id);
  }
  console.log(pacientesTail)
  return  {pacientesTail: pacientesTail}
  }