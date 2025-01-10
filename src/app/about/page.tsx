import React from 'react';
import { Bot, BookOpen, Trophy } from 'lucide-react';
import { Components } from '@/components';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Components.UI.GridBackground />
      <div className="relative z-10">
        <Components.Layout.Header />
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
            Nossa História
          </h1>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl text-gray-300">
              Somos um time de desenvolvedores e estudantes de Ciência da Computação pela Universidade Federal de Campina Grande, Paraíba.
              A ideia do DuoLibras nasceu em 2024, quando buscávamos unir nosso conhecimento técnico a uma causa social transformadora.
            </p>
          </div>
        </section>

        {/* Problema e Impacto */}
        <section className="bg-gray-900/50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              De onde surgiu nossa ideia
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent mb-4">
                  10M
                </div>
                <p className="text-gray-300">pessoas surdas no Brasil</p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent mb-4">
                  5%
                </div>
                <p className="text-gray-300">da população brasileira</p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent mb-4">
                  4x10
                </div>
                <p className="text-gray-300">têm dificuldade de se comunicar com amigos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Solução */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              DuoLibras - Um Novo Jeito de Aprender
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 p-3 rounded-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inteligência Artificial</h3>
                    <p className="text-gray-300">Aplicativo interativo que utiliza IA para reconhecer sinais em tempo real.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 p-3 rounded-lg">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trilhas</h3>
                    <p className="text-gray-300">Trilhas de aprendizado dinâmicas com feedback imediato.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Aulas em Libras</h3>
                    <p className="text-gray-300">Aulas de Libras para iniciantes e trilhas em outras disciplinas.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
                  Nosso Diferencial
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-2">Machine Learning</h4>
                    <p className="text-gray-300">Para reconhecimento de sinais em tempo real.</p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-2">Gamificação</h4>
                    <p className="text-gray-300">Inspirada em apps como o Duolingo.</p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-2">Trilhas interdisciplinares</h4>
                    <p className="text-gray-300">Aulas em libras de Matemática, Português, etc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impacto Social */}
        <section className="bg-gray-900/50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              Impacto social e educacional
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Inclusão Social</h3>
                <p className="text-gray-300 mb-4">Promovendo a integração de pessoas surdas em diferentes ambientes sociais.</p>
                <div className="mt-8 text-lg font-semibold text-purple-400">Aproximação Familiar</div>
                <p className="text-gray-300">Proporcionando uma oportunidade para familiares aprenderem Libras, melhorando a comunicação e o vínculo familiar.</p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Libras para todos</h3>
                <p className="text-gray-300 mb-4">Facilitando o aprendizado e a prática de Libras para qualquer pessoa interessada.</p>
                <div className="mt-8 text-lg font-semibold text-purple-400">Apoio Educacional</div>
                <p className="text-gray-300">Oferecendo recursos educacionais em Libras para escolas e instituições que utilizam essa língua de sinais.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Público Alvo */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              Quem Vai Usar o DuoLibras?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-4">Surdos</h3>
                <p className="text-gray-300">Que quiserem melhorar suas habilidades em Libras e aprender com as aulas Trilhas e Aulas Em Libras.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-4">Ouvintes</h3>
                <p className="text-gray-300">Interessados em aprender Libras.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-4">Para todas as idades</h3>
                <p className="text-gray-300">Crianças, jovens e adultos. Todos vão poder usar o DuoLibras.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-4">Educadores</h3>
                <p className="text-gray-300">Aqueles que querem incluir suas aulas em libras para ajudar a comunidade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visão de Futuro */}
        <section className="bg-gray-900/50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              Nossa Visão de Futuro
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Gamificação Avançada</h3>
                <p className="text-gray-300">Expandir elementos de gamificação para tornar o aprendizado ainda mais envolvente e motivador.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Cursos Gratuitos</h3>
                <p className="text-gray-300">Manter uma base sólida de conteúdo gratuito para garantir o acesso universal ao aprendizado de Libras.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Modelo Freemium</h3>
                <p className="text-gray-300">Oferecer recursos premium através de assinaturas, mantendo a sustentabilidade do projeto sem comprometer o acesso básico.</p>
              </div>
            </div>
          </div>
        </section>

        <Components.Layout.Footer />
      </div>
    </div>
  );
}
