import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { eq, ilike,sql, asc, inArray,ne, and } from 'drizzle-orm';


export const db = drizzle(
  neon(process.env.POSTGRES_URL!, {
    fetchOptions: {
      cache: 'no-store'
    }
  })
);

export const pacientes = pgTable('pacientes', {
  id: serial('id').primaryKey(),
  nombre: varchar('nombre', { length: 50 }),
  estado: varchar('estado', { length: 50 }),
  medico: varchar('medico', { length: 50 }),
  direccion: varchar('direccion', { length: 255 }),  
  telefono: varchar('telefono', { length: 50 }),
  email: varchar('email', { length: 100 }),
  edad: varchar('edad', { length: 3 }),
  serial: varchar('serial', { length: 3 }),
});

export const medicos = pgTable('medicos', {
  id: serial('id').primaryKey(),
  nombre: varchar('nombre', { length: 50 }),
  especialidad: varchar('especialidad', { length: 50 }),
});

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

export type SelectUser = typeof pacientes.$inferSelect;


export async function simpleUsers(): Promise<{
  pacientes: SelectUser[];
}> {

  const moreUsers = await db.select().from(pacientes).orderBy(pacientes.id).limit(5);
  return { pacientes: moreUsers };
}

export async function getUsers(
  search: string,
  offset: number
): Promise<{
  pacientes: SelectUser[];
  newOffset: number | null;
}> {
  // Always search the full table, not per page
  console.log(pacientes,search)
  if (search) {
    return {
      pacientes: await db
        .select()
        .from(pacientes)
        .where(
          and(
            ilike(pacientes.medico, `%${search}%`),
            ne(pacientes.estado, 'Finalizado')
          )
        )
        .limit(1000)
        .orderBy(pacientes.id),
      newOffset: null
    };
  }

  if (offset === null) {
    return { pacientes: [], newOffset: null };
  }

  const moreUsers = await db.select().from(pacientes).orderBy(pacientes.id).limit(20).offset(offset);
  const newOffset = moreUsers.length >= 20 ? offset + 20 : null;
  return { pacientes: moreUsers, newOffset };
}

export async function deleteUserById(id: number) {
 // await db.delete(users).where(eq(users.id, id));
}

export async function updateStatusbyId (id: number, status:string){
  await db.update(pacientes)
  .set({ estado: status })
  .where(eq(pacientes.id, id));
}

export async function createPatient(numero_paciente: string, nombre: string, direccion:string, email:string, telefono:string, option:string, edad:string) {
  var ListaMedicos = []
  if(option=='MG'){
    ListaMedicos = await db.select({ nombre: medicos.nombre }).from(medicos);

  }
  else{
    ListaMedicos = await db.select({ nombre: medicos.nombre }).from(medicos).where(eq(medicos.especialidad, option));
  }
  
  const nombresMedicos = ListaMedicos.map((medico) => medico.nombre).filter((nombre): nombre is string => nombre !== null);

  const loadMedicos = await db.select({
    nombre: medicos.nombre,
    count: sql<number>`count(${pacientes.id})`.mapWith(Number)
  }).from(medicos)
  .leftJoin(pacientes, eq(pacientes.medico, medicos.nombre))
  .where(inArray(medicos.nombre, nombresMedicos))
  .groupBy(medicos.nombre)
  .orderBy(asc(sql`count(${pacientes.id})`))
  .limit(1)
  ;
 
    //.having(sql`count(${usersTable.id}) > 300`)
    console.log(ListaMedicos);
    console.log(loadMedicos);
    var medicoElegido: string = nombresMedicos[0] ?? ""; 

    if (loadMedicos.length > 0) {
      medicoElegido = loadMedicos[0].nombre ?? ""; 
    }
 

  await db.insert(pacientes).values({ serial:numero_paciente, nombre: nombre, direccion: direccion, email: email, estado: "En Espera", medico: medicoElegido, edad:edad, telefono: telefono });
}

