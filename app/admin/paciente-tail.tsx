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
import { deleteUser, fetchTail } from './actions';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export function UsersTable({ initialPacientes }: { initialPacientes: SelectUser[];  }) {

  const router = useRouter();
  const [pacientes, setPacientes] = useState<SelectUser[]>(initialPacientes);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { pacientesTail: updatedPacientes } = await fetchTail(); // Implement fetchTail to get the latest data
        setPacientes(updatedPacientes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Initial data fetch
    fetchData();

    // Set interval to reload data every 10 seconds 10000
    const intervalId = setInterval(fetchData, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);



  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Estado</TableHead>
              <TableHead className="hidden md:table-cell">Médico</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pacientes.map((paciente) => (
              <UserRow key={paciente.id} paciente={paciente} />
            ))}
          </TableBody>
        </Table>
      </form>

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
    </TableRow>
  );
}
