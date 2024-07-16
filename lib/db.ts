import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { eq, ilike } from 'drizzle-orm';

export const db = drizzle(
  neon(process.env.POSTGRES_URL!, {
    fetchOptions: {
      cache: 'no-store'
    }
  })
);

const pacientes = pgTable('pacientes', {
  id: serial('id').primaryKey(),
  nombre: varchar('nombre', { length: 50 }),
  estado: varchar('diagnostico', { length: 50 }),
  medico: varchar('medico', { length: 50 })
});

export type SelectUser = typeof pacientes.$inferSelect;

export async function getUsers(
  search: string,
  offset: number
): Promise<{
  pacientes: SelectUser[];
  newOffset: number | null;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      pacientes: await db
        .select()
        .from(pacientes)
        .where(ilike(pacientes.nombre, `%${search}%`))
        .limit(1000),
      newOffset: null
    };
  }

  if (offset === null) {
    return { pacientes: [], newOffset: null };
  }

  const moreUsers = await db.select().from(pacientes).limit(20).offset(offset);
  const newOffset = moreUsers.length >= 20 ? offset + 20 : null;
  return { pacientes: moreUsers, newOffset };
}

export async function deleteUserById(id: number) {
 // await db.delete(users).where(eq(users.id, id));
}
