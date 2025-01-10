import React from 'react';
import { Trophy, Flame, Target, BarChart } from 'lucide-react';
import { Components } from '@/components';

export default function StudentDashboard() {
  // Dados mockados para exemplo
  const studentInfo = {
    name: "João Silva",
    streak: 7,
    xp: 1240,
    level: 5,
    todayGoal: 75, // porcentagem
    lastAccess: "Hoje, 14:30"
  };

  const currentCourses = [
    {
      id: 1,
      name: "Libras Básico",
      progress: 65,
      nextLesson: "Cumprimentos",
      totalLessons: 20,
      completedLessons: 13
    },
    {
      id: 2,
      name: "Matemática em Libras",
      progress: 30,
      nextLesson: "Números de 1 a 20",
      totalLessons: 15,
      completedLessons: 4
    }
  ];

  const achievements = [
    { id: 1, name: "7 dias seguidos!", description: "Continue praticando!" },
    { id: 2, name: "Primeira lição", description: "Você começou sua jornada!" },
    { id: 3, name: "Nível 5", description: "Subiu para o nível 5!" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Components.UI.GridBackground />
      <div className="relative z-10">
        {/* Cabeçalho com informações do usuário */}
        <header className="bg-gradient-to-r from-cyan-500/10 to-cyan-700/10 border-b border-cyan-500/20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
                  Olá, {studentInfo.name}! 👋
                </h1>
                <p className="text-gray-400 mt-2">Último acesso: {studentInfo.lastAccess}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-2 text-orange-400">
                    <Flame className="w-5 h-5" />
                    <span className="font-bold">{studentInfo.streak}</span>
                  </div>
                  <p className="text-sm text-gray-400">Dias seguidos</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Trophy className="w-5 h-5" />
                    <span className="font-bold">{studentInfo.xp} XP</span>
                  </div>
                  <p className="text-sm text-gray-400">Nível {studentInfo.level}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Coluna Principal */}
            <div className="md:col-span-2 space-y-8">
              {/* Meta Diária */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Meta Diária</h2>
                  <Target className="w-5 h-5 text-cyan-500" />
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-cyan-500/20 text-cyan-500">
                        {studentInfo.todayGoal}% Completo
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-cyan-500/20">
                    <div style={{ width: `${studentInfo.todayGoal}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
                  </div>
                </div>
              </div>

              {/* Cursos em Andamento */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Cursos em Andamento</h2>
                {currentCourses.map(course => (
                  <div key={course.id} className="bg-gray-800/50 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">{course.name}</h3>
                      <span className="text-cyan-500">{course.progress}%</span>
                    </div>
                    <div className="mb-4 relative pt-1">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-cyan-500/20">
                        <div style={{ width: `${course.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Próxima lição: {course.nextLesson}</span>
                      <span>{course.completedLessons}/{course.totalLessons} lições</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna Lateral */}
            <div className="space-y-8">
              {/* Conquistas Recentes */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Conquistas Recentes</h2>
                  <Trophy className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="space-y-4">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className="flex items-center gap-4 p-3 bg-gray-700/50 rounded-lg">
                      <div className="bg-yellow-400/20 p-2 rounded-full">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{achievement.name}</h4>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estatísticas */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Estatísticas</h2>
                  <BarChart className="w-5 h-5 text-cyan-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total de XP</span>
                    <span className="font-bold">{studentInfo.xp}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Nível Atual</span>
                    <span className="font-bold">{studentInfo.level}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sequência Atual</span>
                    <span className="font-bold">{studentInfo.streak} dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
