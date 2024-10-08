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
import { useEffect } from 'react';


export function UsersTable({
  pacientes,
  offset, search
}: {
  pacientes: SelectUser[];
  offset: number | null;
  search: string | null;
}) {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Esto forzará la revalidación de la página actual
      window.location.reload();
    }, 10000); // 10 segundos

    return () => clearInterval(intervalId);
  }, [router]);
  

  function onClick() {
   // router.replace(`/?offset=${offset}`);
  }

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Estado</TableHead>
              <TableHead className="hidden md:table-cell">Médico</TableHead>
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
  var nextStatus = ''
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
        <a
         style={{color:"white" , background: "#2589e1" }}
          href={`/admin/info?id=${pacienteId}`}
         
          className="inline-flex justify-center items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-full"
        >
          <span>Ver información</span>
        </a>

      </TableCell>
    </TableRow>
  );
}