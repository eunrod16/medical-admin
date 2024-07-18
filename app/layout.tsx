import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, WaitingIcon, UsersIcon, DoctorIcon, RegisterIcon } from '@/components/icons';
import { User } from './user';
import { NavItem } from './nav-item';
import { metadata } from './metadata';
import MobileMenu from './mobile-menu';

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <MobileMenu />
          <div className="hidden lg:block border-r bg-gray-100/40 dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link className="flex items-center gap-2 font-semibold" href="/">
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
                  <NavItem href="/doctors">
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
          <div className="flex flex-col w-full">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              <button
                className="lg:hidden"
                onClick={() => document.getElementById('mobileMenu')!.classList.toggle('hidden')}
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
              <Link className="flex items-center gap-2 font-semibold lg:hidden" href="/">
                <Logo />
                <span className="">Medical Admin</span>
              </Link>
              <User />
            </header>
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
