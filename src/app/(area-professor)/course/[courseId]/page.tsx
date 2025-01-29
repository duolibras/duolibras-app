"use client"

import React from 'react';
import { ArrowLeft, Plus, Play, Edit2, Trash2, GripVertical, Clock, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from 'next/image';
import { useNavigation } from '@/hooks/use-navigation';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const CourseLessonsView = () => {
  const navigation = useNavigation();
  const course = {
    id: 1,
    title: "Introdução à Libras",
    description: "Curso básico para iniciantes em Libras, abordando vocabulário essencial e primeiros sinais.",
    banner: "/api/placeholder/800/400",
    status: "draft",
    lessons: [
      {
        id: 1,
        title: "Alfabeto em Libras",
        description: "Aprenda o alfabeto manual utilizado na Língua Brasileira de Sinais.",
        thumbnail: "/api/placeholder/400/225",
        duration: "15:30",
        status: "published"
      },
      {
        id: 2,
        title: "Números e Quantidades",
        description: "Como expressar números, quantidades e valores em Libras.",
        thumbnail: "/api/placeholder/400/225",
        duration: "12:45",
        status: "published"
      },
      {
        id: 3,
        title: "Cumprimentos Básicos",
        description: "Aprenda as formas mais comuns de cumprimentar em Libras.",
        thumbnail: "/api/placeholder/400/225",
        duration: "18:20",
        status: "draft"
      }
    ]
  };

  const emptyCourse = {
    ...course,
    lessons: []
  };

  const showEmptyState = false; 
  const currentCourse = showEmptyState ? emptyCourse : course;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="bg-white dark:bg-muted-dark border-b border-border-light dark:border-border-dark">
        <div className="flex justify-between max-w-7xl mx-auto">
          <div className="flex items-center h-16 px-4">
            <Button variant="primary" className="mr-4" onClick={() => navigation.goBack()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-text-light dark:text-text-dark">
                {currentCourse.title}
              </h1>
              <p className="text-sm text-secondary-light dark:text-secondary-dark">
                {currentCourse.status === 'draft' ? 'Rascunho' : 'Publicado'}
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Course Banner */}
      <div className="relative h-48 md:h-64 bg-muted-light dark:bg-muted-dark">
        <Image
          width={100}
          height={60}
          src={currentCourse.banner}
          alt={currentCourse.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">{currentCourse.title}</h2>
            <p className="text-white/80">{currentCourse.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
              Aulas do Curso
            </h3>
            <p className="text-sm text-secondary-light dark:text-secondary-dark">
              {currentCourse.lessons.length} aulas
            </p>
          </div>
          <Button className="flex align-center justify-center bg-cyan-500 hover:bg-cyan-700 text-white">
            <Plus className="mr-2" />
            <span className="">Adicionar Aula</span>
          </Button>
        </div>

        {currentCourse.lessons.length === 0 ? (
          // Empty State
          <div className="text-center py-12 bg-white dark:bg-muted-dark rounded-lg border border-border-light dark:border-border-dark">
            <div className="mb-4">
              <Play className="h-12 w-12 text-secondary-light dark:text-secondary-dark mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-text-light dark:text-text-dark mb-2">
              Nenhuma aula adicionada
            </h3>
            <p className="text-secondary-light dark:text-secondary-dark mb-6">
              Comece adicionando a primeira aula ao seu curso
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Primeira Aula
            </Button>
          </div>
        ) : (
          // Lessons List
          <ScrollArea className="h-[calc(100vh-24rem)]">
            <div className="space-y-4">
              {currentCourse.lessons.map((lesson, index) => (
                <div 
                  key={lesson.id}
                  className="flex gap-4 p-4 bg-white dark:bg-muted-dark rounded-lg border border-border-light dark:border-border-dark"
                >
                  <GripVertical className="h-6 w-6 text-secondary-light dark:text-secondary-dark cursor-move" />
                  
                  <div className="flex-1 flex gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-40 h-24 flex-shrink-0">
                      <Image
                        width={100}
                        height={60}
                        src={lesson.thumbnail}
                        alt={lesson.title}
                        className="w-full h-full object-cover rounded"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Lesson Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-text-light dark:text-text-dark">
                            {index + 1}. {lesson.title}
                          </h4>
                          <p className="text-sm text-secondary-light dark:text-secondary-dark mt-1">
                            {lesson.description}
                          </p>
                        </div>
                        <Badge variant={lesson.status === 'published' ? 'default' : 'secondary'}>
                          {lesson.status === 'published' ? 'Publicado' : 'Rascunho'}
                        </Badge>
                      </div>

                      <div className="flex items-center mt-4">
                        <span className="flex items-center text-sm text-secondary-light dark:text-secondary-dark">
                          <Clock className="h-4 w-4 mr-1" />
                          {lesson.duration}
                        </span>
                        <div className="flex gap-2 ml-auto">
                          <Button variant="primary">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="primary">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button variant="primary" className="text-red-500 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </main>
    </div>
  );
};

export default CourseLessonsView;
