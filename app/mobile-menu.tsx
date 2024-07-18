'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo, WaitingIcon, UsersIcon, DoctorIcon, RegisterIcon } from '@/components/icons';
import { NavItem } from './nav-item';

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={`fixed inset-0 z-50 bg-gray-800/70 lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMobileMenu}></div>
      <div id="mobileMenu" className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-100/40 dark:bg-gray-800/40 lg:static lg:translate-x-0 transition-transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
    </>
  );
}
