"use client"

import Link from 'next/link';
import { useState } from 'react';
import { HeaderProps, NavItem } from './types';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { ChevronDown, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const defaultNavItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
];

export const Header = ({
  navItems = defaultNavItems,
  logo = 'DuoLibras',
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const AreaDropdown = ({ mobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center gap-2 ${
        mobile 
          ? 'text-2xl py-4 text-primary-light dark:text-primary-dark' 
          : 'bg-gradient-to-r from-cyan-500 to-cyan-700 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity'
      }`}>
        Área Restrita
        <ChevronDown className={`w-4 h-4 ${mobile ? 'text-primary-light dark:text-primary-dark' : 'text-white'}`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/area-aluno" className="w-full">
            Área do Aluno
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/area-professor" className="w-full">
            Área do Professor
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const MobileNavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="text-2xl py-4 hover:text-cyan-500 transition-colors"
        >
          {item.label}
        </Link>
      ))}
      <Link
        href="/area-aluno"
        onClick={() => setIsOpen(false)}
        className="text-2xl py-4 text-cyan-500"
      >
        Área do Aluno
      </Link>
      <Link
        href="/area-professor"
        onClick={() => setIsOpen(false)}
        className="text-2xl py-4 text-cyan-500"
      >
        Área do Professor
      </Link>
    </>
  );

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => mobile && setIsOpen(false)}
          className={`${
            item.isButton
              ? 'text-white bg-gradient-to-r from-cyan-500 to-cyan-700 px-4 rounded-lg py-2'
              : 'hover:text-cyan-500 transition-colors'
          } ${
            mobile ? 'text-md py-2' : ''
          }`}
        >
          {item.label}
        </Link>
      ))}
      <AreaDropdown mobile={mobile} />
    </>
  );

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <Link href='/' className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
          {logo}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-gray-600 dark:text-white space-x-6 items-center">
          <NavLinks />
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 ml-2 text-gray-600 dark:text-white">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="w-full h-screen bg-white dark:bg-gray-900 overflow-y-auto">
              <div className="container mx-auto px-6 py-8">
                <div className="mt-8 mb-4">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent mb-2">
                    Menu
                  </h2>
                  <div className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full"></div>
                </div>

                
                
                <div className="flex flex-col space-y-6 mt-8">
                  <MobileNavLinks />
                </div>

                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium">
                      Redes Sociais
                    </h3>
                    <div className="flex space-x-4">
                      <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                        Instagram
                      </Link>
                      <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                        LinkedIn
                      </Link>
                      <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                        YouTube
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
                  © 2024 DuoLibras. Todos os direitos reservados.
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
