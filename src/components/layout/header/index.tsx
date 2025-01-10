"use client"

import Link from 'next/link';
import { HeaderProps, NavItem } from './types';

const defaultNavItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
  { label: 'Área do aluno', href: '/area-aluno', isButton: true }
];

export const Header = ({ 
  navItems = defaultNavItems,
  logo = 'DuoLibras',
}: HeaderProps) => {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href='/' className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
          {logo}
        </Link>
      </div>
      <div className="flex space-x-6 text-white flex items-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`${
              item.isButton
                ? 'bg-gradient-to-r from-cyan-500 to-cyan-700 px-4 py-2 rounded-full'
                : 'hover:text-cyan-500 transition-colors'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
