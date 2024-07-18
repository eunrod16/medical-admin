// app/form.tsx
'use client';

import React, { useRef } from 'react';

export function Form({ action, children }: { action: (formData: FormData) => Promise<void>; children: React.ReactNode }) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(formRef.current!);
    await action(formData);
    formRef.current!.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
      <div>
        <label htmlFor="numero_paciente" className="block text-xs text-gray-600 uppercase">Número Paciente</label>
        <input id="numero_paciente" name="numero_paciente" type="number" required className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="name" className="block text-xs text-gray-600 uppercase">Nombre</label>
        <input id="name" name="name" type="text" required className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="age" className="block text-xs text-gray-600 uppercase">Edad</label>
        <input id="age" name="age" type="number" required className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-xs text-gray-600 uppercase">Teléfono</label>
        <input id="phone" name="phone" type="number" required className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs text-gray-600 uppercase">Correo Electrónico</label>
        <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="address" className="block text-xs text-gray-600 uppercase">Dirección</label>
        <input id="address" name="address" type="text" required className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="options" className="block text-xs text-gray-600 uppercase">Médico Seleccionado</label>
        <select id="options" name="options" required className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black">
          <option value="">Please select an option</option>
          <option value="MG">Medicina General</option>
          <option value="MI">Medicina Interna</option>
          <option value="G">Ginecología</option>
        </select>
      </div>
      {children}
    </form>
  );
}
