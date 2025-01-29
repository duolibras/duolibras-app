"use client";

import { useNavigation } from '@/hooks/use-navigation';
import Link from 'next/link';
import React from 'react';

type FooterProps = {
  motto?: string;
  enrollButtonText?: string;
  year?: number;
}

export const Footer = ({ 
  motto = "Quebre barreiras de comunicação. Fortaleça vínculos através de Libras.",
  enrollButtonText = "Matricule-se",
  year = 2025
}: FooterProps) => {
  const navigation = useNavigation();

  return (
    <footer className="border-t border-gray-800 py-12 text-gray-400">
      <div className="container mx-auto px-6 text-center">
        <p className="text-3xl font-bold mb-8 text-gray-800 dark:text-white ">
          {motto}
        </p>
        <button onClick={navigation.toRegister} className="bg-green-600 text-white px-8 py-4 rounded-lg mb-12 hover:bg-green-700 transition-colors">
          {enrollButtonText}
        </button>
        <div className="text-sm">
          © {year} DuoLibras
          <span className="mx-4">·</span>
          <Link href="/contact" className="text-blue-500 hover:text-blue-400">Contato</Link>
          <span className="mx-4">·</span>
          <Link href="/terms-of-use" className="text-blue-500 hover:text-blue-400">Termos de Uso</Link>
          <span className="mx-4">·</span>
          <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-400">Política de privacidade</Link>
        </div>
      </div>
    </footer>
  );
};
