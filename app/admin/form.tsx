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
        <input id="age" name="age" type="number"  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
        <select id="age_2" name="age_2" required className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black">
          <option value="">años/meses</option>
          <option value="Años">Años</option>
          <option value="Meses">Meses</option>
        </select>
      
      </div>
      <div>
        <label htmlFor="phone" className="block text-xs text-gray-600 uppercase">Teléfono</label>
        <input id="phone" name="phone" type="number"  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs text-gray-600 uppercase">Correo Electrónico</label>
        <input id="email" name="email" type="email"  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="address" className="block text-xs text-gray-600 uppercase">Dirección</label>
        <input id="address" name="address" type="text"  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="presion" className="block text-xs text-gray-600 uppercase">Presión Arterial (mmHg) ej. 120/80</label>
        <input id="presion" name="presion" type="text" pattern="\d{2,3}/\d{2,3}"  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="temperature" className="block text-xs text-gray-600 uppercase">Temperatura axilar (C°) ej 37.6</label>
        <input id="temperature" name="temperature" type="number"  step="0.01" className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="pulse" className="block text-xs text-gray-600 uppercase">Pulso (lat/min) ej. 88</label>
        <input id="pulse" name="pulse" type="number"  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="weight" className="block text-xs text-gray-600 uppercase">Peso (lbs) ej. 44</label>
        <input id="weight" name="weight" type="number"  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="weight" className="block text-xs text-gray-600 uppercase">Antecedentes</label>
        <textarea id="text" name="text" className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black" />
      </div>
      <div>
        <label htmlFor="options" className="block text-xs text-gray-600 uppercase">Médico Seleccionado</label>
        <select id="options" name="options" required className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black">
          <option value="">Please select an option</option>
          <option value="MG">Medicina General</option>
          <option value="G">Ginecología</option>
          <option value="N">Nutrición</option>
        </select>
      </div>
      {children}
    </form>
  );
}
