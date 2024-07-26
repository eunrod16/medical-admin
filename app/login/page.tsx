import { getProviders, signIn, getSession } from 'next-auth/react';
import Link from 'next/link';
import { Form } from './form';
import { SubmitButton } from 'app/admin/submit-button';

export default async function Login({ searchParams }) {
  const error = searchParams.error || '';

  const handleSubmit = async (formData: FormData) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });

    if (result?.error) {
      window.location.href = '/login?error=Credenciales inválidas. Por favor, inténtelo de nuevo.';
    } else if (result?.ok) {
      window.location.href = '/admin';
    }
  };

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
              {error}
            </p>
          )}
        </div>
        <Form action={handleSubmit}>
          <SubmitButton>Ingresar</SubmitButton>
        </Form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      searchParams: context.query,
    },
  };
}
