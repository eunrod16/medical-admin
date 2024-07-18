'use client';

import Link from 'next/link';

interface NavItemProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function NavItem({ href, onClick, children }: NavItemProps) {
  return (
    <a href={href} onClick={onClick} className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
      {children}
    </a>
  );
}
