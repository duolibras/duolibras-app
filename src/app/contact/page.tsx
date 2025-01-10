import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Components } from '@/components';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Components.UI.GridBackground />
      <div className="relative z-10">
          <Components.Layout.Header />
          {/* Hero Section */}
          <section className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos aqui para ajudar! Se você tem dúvidas, sugestões ou quer saber mais sobre o DuoLibras, 
              não hesite em nos contatar.
            </p>
          </section>

          {/* Contact Grid */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-800/50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Assunto
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="suporte">Suporte</option>
                        <option value="parceria">Parceria</option>
                        <option value="imprensa">Imprensa</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Mensagem
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Sua mensagem aqui..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-cyan-700 py-3 px-6 rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Enviar mensagem
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
                      Informações de Contato
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 p-3 rounded-lg">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <p className="text-gray-300">contato@duolibras.com.br</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 p-3 rounded-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Localização</h3>
                          <p className="text-gray-300">Campina Grande, Paraíba - Brasil</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 p-8 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                    <p className="text-gray-300 mb-6">
                      Siga-nos nas redes sociais para ficar por dentro das novidades e atualizações do DuoLibras.
                    </p>
                    <div className="flex gap-4">
                      {/* Adicionar ícones e links de redes sociais quando disponíveis */}
                    </div>
                  </div>

                  <div className="bg-gray-800/50 p-8 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">FAQ</h3>
                    <p className="text-gray-300 mb-6">
                      Confira nossa seção de perguntas frequentes, você pode encontrar a resposta que procura.
                    </p>
                    <Link 
                      href="/" 
                      className="text-cyan-500 hover:text-cyan-400 font-medium"
                    >
                      Ver perguntas frequentes →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Components.Layout.Footer />
      </div>
    </div>
  );
}
