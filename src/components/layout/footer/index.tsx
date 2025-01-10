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
  return (
    <footer className="border-t border-gray-800 py-12 text-gray-400">
      <div className="container mx-auto px-6 text-center">
        <p className="text-3xl font-bold mb-8 text-white">
          {motto}
        </p>
        <button className="bg-green-600 text-white px-8 py-4 rounded-lg mb-12 hover:bg-green-700 transition-colors">
          {enrollButtonText}
        </button>
        <div className="text-sm">
          © {year} DuoLibras
          <span className="mx-4">·</span>
          <a href="#" className="text-blue-500 hover:text-blue-400">Contato</a>
          <span className="mx-4">·</span>
          <a href="#" className="text-blue-500 hover:text-blue-400">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};
