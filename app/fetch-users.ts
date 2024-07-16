// pages/api/fetch-users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db'; // Asegúrate de que este sea el camino correcto al archivo db.ts
import { pacientes } from '@/lib/db'; // Asegúrate de que este sea el camino correcto al archivo db.ts
import { asc } from 'drizzle-orm';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const moreUsers = await db.select().from(pacientes).orderBy(asc(pacientes.id)).limit(20);
    res.status(200).json(moreUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}