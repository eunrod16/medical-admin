'use client';

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Logo, WaitingIcon, UsersIcon, DoctorIcon, RegisterIcon } from '@/components/icons';
import { User } from './user';
import { NavItem } from './nav-item';

import { metadata } from './metadata'; // Import the metadata but do not export it

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className={`fixed inset-0 z-50 bg-gray-800/70 lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMobileMenu}></div>
          <div className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-100/40 dark:bg-gray-800/40 lg:static lg:translate-x-0 transition-transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link className="flex items-center gap-2 font-semibold" href="/" onClick={toggleMobileMenu}>
                  <Logo />
                  <span className="">Medical Admin</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/" onClick={toggleMobileMenu}>
                    <RegisterIcon className="h-4 w-4" />
                    Ingreso
                  </NavItem>
                  <NavItem href="/waiting" onClick={toggleMobileMenu}>
                    <WaitingIcon className="h-4 w-4" />
                    Sala de Espera
                  </NavItem>
                  <NavItem href="/doctors" onClick={toggleMobileMenu}>
                    <DoctorIcon className="h-4 w-4" />
                    Médicos
                  </NavItem>
                  <NavItem href="/list" onClick={toggleMobileMenu}>
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
                onClick={toggleMobileMenu}
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
