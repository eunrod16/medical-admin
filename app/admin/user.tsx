import { Button } from '@/components/ui/button';
import { auth, signIn, signOut } from 'app/auth'; //'@/lib/auth';
import Image from 'next/image';

export async function User() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <form
        action={async () => {
          'use server';
          await signIn();
        }}
      >
        <Button variant="outline">Sign In</Button>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button variant="outline">Sign Out</Button>
      </form>


    </div>
  );
}
