"use client"

import React from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: 'Quem é o público alvo?',
      answer: 'Este curso é perfeito para pessoas surdas, familiares de surdos, e qualquer pessoa interessada em aprender Libras de forma acessível e divertida.'
    },
    {
      id: '2',
      question: 'Como funciona o método de ensino?',
      answer: 'Utilizamos um sistema gamificado, similar ao Duolingo, onde você aprende de forma progressiva, ganha pontos e conquistas.'
    },
    {
      id: '3',
      question: 'Quanto tempo preciso dedicar por dia?',
      answer: 'Recomendamos 15-20 minutos diários para um aprendizado consistente, mas você pode adaptar conforme sua disponibilidade.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      text: 'O DuoLibras transformou minha comunicação com minha filha surda. A metodologia é incrível!',
      time: '3 horas atrás'
    },
    {
      id: 2,
      name: 'João Santos',
      text: 'Estou aprendendo Libras de forma divertida e eficiente. Os exercícios gamificados fazem toda diferença.',
      time: '6 horas atrás'
    }
  ];

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #06B6D4 1px, transparent 1px),
                           linear-gradient(to bottom, #06B6D4 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.2,
          transform: 'perspective(500px) rotateX(60deg)',
        }} />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              DuoLibras
            </span>
          </div>
          <div className="flex space-x-6 text-white">
            <button className="hover:text-cyan-500 transition-colors">Início</button>
            <button className="hover:text-cyan-500 transition-colors">Sobre</button>
            <button className="hover:text-cyan-500 transition-colors">Contato</button>
            <button className="bg-gradient-to-r from-cyan-500 to-cyan-700 px-4 py-2 rounded-full">
              Área do aluno
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-6 py-24 text-center text-white flex flex-col items-center"> 
          <h1 className="sr-only">
            DuoLibras
          </h1>
          <Image src="/images/logo.svg" alt="DuoLibras Logo" width={400} height={120} />
          <p className="text-2xl mt-6 mb-12">
            Aprenda Libras de forma divertida e acessível
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-cyan-700 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
            Matricule-se agora →
          </button>
          <div className="mt-8 flex justify-center space-x-4">
            <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm">
              FAQ
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              +100 depoimentos
            </span>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-6 py-16" id="faq">
          <h2 className="text-3xl font-bold mb-8 text-white">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-white"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="text-lg">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 py-4 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="container mx-auto px-6 py-16" id="depoimentos">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
            Depoimentos
            <span className="ml-3 bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
              1.469
            </span>
          </h2>
          <div className="mb-6 text-green-500">
            Importante: Os depoimentos abaixo não foram selecionados a dedo. 
            Esta área é controlada pelos próprios alunos que já completaram pelo menos os 7 primeiros dias de aulas.
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 rounded-lg p-6 text-white"
              >
                <div className="flex items-center mb-4">
                  <span className="font-semibold text-cyan-500">{testimonial.name}</span>
                  <span className="ml-4 text-sm text-gray-400">{testimonial.time}</span>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12 text-gray-400">
          <div className="container mx-auto px-6 text-center">
            <p className="text-3xl font-bold mb-8 text-white">
              Eu garanto que vai existir um você antes e depois de aprender Libras.
            </p>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg mb-12 hover:bg-green-700 transition-colors">
              Matricule-se
            </button>
            <div className="text-sm">
              © 2025 DuoLibras
              <span className="mx-4">·</span>
              <a href="#" className="text-blue-500 hover:text-blue-400">Contato</a>
              <span className="mx-4">·</span>
              <a href="#" className="text-blue-500 hover:text-blue-400">Termos de Uso</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

