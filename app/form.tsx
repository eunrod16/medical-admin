export function Form({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="numero_paciente"
          className="block text-xs text-gray-600 uppercase"
        >
          Número Paciente
        </label>
        <input
          id="numero_paciente"
          name="numero_paciente"
          type="number"
          placeholder=""
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-xs text-gray-600 uppercase"
        >
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="input"
          placeholder=""
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="age"
          className="block text-xs text-gray-600 uppercase"
        >
          Edad
        </label>
        <input
          id="age"
          name="age"
          type="number"
          placeholder=""
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-xs text-gray-600 uppercase"
        >
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          type="number"
          placeholder=""
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase"
        >
          Correo Electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-xs text-gray-600 uppercase"
        >
          Dirección
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="San Benito Petén"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="options"
          className="block text-xs text-gray-600 uppercase"
        >
          Médico Seleccionado
        </label>
        <select
          id="options"
          name="options"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        >
          <option value="">Please select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      {children}
    </form>
  );
}