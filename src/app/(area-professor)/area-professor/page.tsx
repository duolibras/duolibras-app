"use client"

import React from 'react';
import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import { AreaProfessorContent } from './components/area-professor-content';

const TeacherDashboardWithCourses = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const courses = [
    {
      id: 1,
      title: "Introdução à Libras",
      description: "Curso básico para iniciantes em Libras, abordando vocabulário essencial e primeiros sinais.",
      banner: "/api/placeholder/400/225",
      status: "published",
      studentsCount: 45,
      lessonsCount: 12,
      price: "0",
      progress: "100%"
    },
    {
      id: 2,
      title: "Libras Intermediário",
      description: "Aprofunde seus conhecimentos em Libras com exercícios práticos e vocabulário avançado.",
      banner: "/api/placeholder/400/225",
      status: "draft",
      studentsCount: 0,
      lessonsCount: 8,
      price: "197.00",
      progress: "80%"
    },
    {
      id: 3,
      title: "Libras para Educadores",
      description: "Curso especializado para professores e educadores que desejam tornar suas aulas mais inclusivas.",
      banner: "/api/placeholder/400/225",
      status: "published",
      studentsCount: 28,
      lessonsCount: 15,
      price: "247.00",
      progress: "100%"
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar isSidebarOpen={isSidebarOpen} onHandle={setIsSidebarOpen} />
      <div className="flex-1">
        <Header onHandleSidebarMenu={setIsSidebarOpen} />
        <AreaProfessorContent courses={courses} />
      </div>
    </div>
  );
};

export default TeacherDashboardWithCourses;
