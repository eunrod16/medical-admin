import { getUserbyId } from '@/lib/db';


export default async function IndexPage({
  searchParams
}: {
  searchParams: { id: number;  };
}) {
  const search = searchParams.id ?? '';
  const { paciente } = await getUserbyId(search);
  if (paciente!= null){
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Información de Paciente</h1>
      </div>
      <form className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
      <div>
        <label htmlFor="numero_paciente" className="block text-xs text-gray-600 uppercase">Número Paciente</label>
        <input id="numero_paciente" name="numero_paciente" value={paciente.serial  ?? ''}  type="number" disabled className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="name" className="block text-xs text-gray-600 uppercase">Nombre</label>
        <input id="name" name="name" value={paciente.nombre  ?? ''}  type="text" disabled className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="age" className="block text-xs text-gray-600 uppercase">Edad</label>
        <input id="age" name="age" value={paciente.edad  ?? ''}  type="text" disabled className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-xs text-gray-600 uppercase">Teléfono</label>
        <input id="phone" name="phone" value={paciente.telefono  ?? ''}  type="number" disabled className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs text-gray-600 uppercase">Correo Electrónico</label>
        <input id="email" name="email" value={paciente.email  ?? ''}  type="email" disabled className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="address" className="block text-xs text-gray-600 uppercase">Dirección</label>
        <input id="address" name="address" value={paciente.direccion  ?? ''}  type="text" disabled className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="presion" className="block text-xs text-gray-600 uppercase">Presión Arterial (mmHg)</label>
        <input id="presion" name="presion" value={paciente.presion  ?? ''}  type="text" disabled pattern="\d{2,3}/\d{2,3}"  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="temperature" className="block text-xs text-gray-600 uppercase">Temperatura axilar (C°)</label>
        <input id="temperature" name="temperature" value={paciente.temperatura  ?? ''}  type="number" disabled step="0.01" className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="pulse" className="block text-xs text-gray-600 uppercase">Pulso (lat/min) </label>
        <input id="pulse" name="pulse" value={paciente.pulso  ?? ''}  type="number" disabled  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="weight" className="block text-xs text-gray-600 uppercase">Peso (lbs) </label>
        <input id="weight" name="weight" value={paciente.peso  ?? ''}  type="number" disabled className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>

 
    </form>
    </main>
        
  );
}
}
