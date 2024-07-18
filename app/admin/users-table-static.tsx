'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { SelectUser } from '@/lib/db';
import { deleteUser } from './actions';
import { useRouter } from 'next/navigation';

export function UsersTable({
  pacientes,
  offset
}: {
  pacientes: SelectUser[];
  offset: number | null;
}) {
  const router = useRouter();

  function onClick() {
    router.replace(`/?offset=${offset}`);
  }

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Médico</TableHead>
              <TableHead className="hidden md:table-cell">Estado</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pacientes.map((paciente) => (
              <UserRow key={paciente.id} paciente={paciente} />
            ))}
          </TableBody>
        </Table>
      </form>
      {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClick()}
        >
          Next Page
        </Button>
      )}
    </>
  );
}

function UserRow({ paciente }: { paciente: SelectUser }) {
  const pacienteId = paciente.id;
  const deleteUserWithId = deleteUser.bind(null, pacienteId);

  return (
    <TableRow>
      <TableCell className="font-medium">{paciente.nombre}</TableCell>
      <TableCell className="hidden md:table-cell">{paciente.estado}</TableCell>
      <TableCell>{paciente.medico}</TableCell>
      <TableCell>
        <Button
          className="w-full"
          size="sm"
          variant="outline"
          formAction={deleteUserWithId}
          disabled
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}