import Link from 'next/link';
import { Form } from './form';
import { signIn } from 'app/auth';
import { SubmitButton } from 'app/admin/submit-button'; 


export default function Login({
  searchParams
}: {
  searchParams: { error: string;  };
}) {

  const error = searchParams.error;
  console.log(error);
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Ingreso de usuarios</h3>
          <p className="text-sm text-gray-500">
            Usa el nombre de usuario y contraseña
          </p>
          {error && (
            <p className="text-red-500">
              Credenciales inválidas. Por favor, inténtelo de nuevo.
            </p>
          )}
        </div>
        <Form
          action={async (formData: FormData) => {
            'use server';
            await signIn('credentials', {
              redirectTo: '/admin',
              email: formData.get('email') as string,
              password: formData.get('password') as string,
            });
          }}
        >
          <SubmitButton>Ingresar</SubmitButton>

        </Form>
      </div>
    </div>
  );
}