'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavItem({ href, children, onClick }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50',
        {
          'bg-gray-100 dark:bg-gray-800': pathname === href
        }
      )}
    >
      {children}
    </Link>
  );
}
