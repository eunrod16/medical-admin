import './globals.css';

import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, WaitingIcon, UsersIcon, DoctorIcon, RegisterIcon } from '@/components/icons';
import { User } from './user';
import { NavItem } from './nav-item';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Medical Admin',
  description:
    'A user admin medical configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className=" border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <Logo />
                  <span className="">Medical Admin</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/">
                    <RegisterIcon className="h-4 w-4" />
                    Ingreso
                  </NavItem>
                  <NavItem href="/waiting">
                    <WaitingIcon className="h-4 w-4" />
                    Sala de Espera
                  </NavItem>
                  <NavItem href="/waiting">
                    <DoctorIcon className="h-4 w-4" />
                    Médicos
                  </NavItem>
                  <NavItem href="/list">
                    <UsersIcon className="h-4 w-4" />
                    Pacientes
                  </NavItem>

                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

