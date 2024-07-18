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
import { deleteUser, updatePatient } from './actions';
import { useRouter } from 'next/navigation';

export function UsersTable({
  pacientes,
  offset, search
}: {
  pacientes: SelectUser[];
  offset: number | null;
  search: string | null;
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
              <UserRow key={paciente.id} paciente={paciente} search={search} />
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

function UserRow({ paciente, search }: { paciente: SelectUser, search:string|null }) {
  const pacienteId = paciente.id;
  const Currentstatus = paciente.estado;
  var nextStatus = 'En Espera'
  switch (Currentstatus) {
    case  'En Espera' : nextStatus = 'Atender';
     break;
    case  'Atender' : nextStatus = 'En Consulta';
     break;
    case  'En Consulta' : nextStatus = 'Finalizado';
     break;

  }
  const deleteUserWithId = deleteUser.bind(null, pacienteId);

  const updatePatientId = updatePatient.bind( null, pacienteId, search,nextStatus );

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
          formAction={updatePatientId}
          
        >
          {nextStatus}
        </Button>

      </TableCell>
    </TableRow>
  );
}