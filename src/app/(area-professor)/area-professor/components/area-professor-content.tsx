import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Clock, Edit2, Eye, Plus, Trash2, Users } from "lucide-react"
import Image from 'next/image';

export const AreaProfessorContent = ({
  courses
}: {
  courses: {
    id: number;
    title: string;
    description: string;
    banner: string;
    status: string;
    studentsCount: number;
    lessonsCount: number;
    price: string;
    progress: string;
  }[];
}) => {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-2">
            Seus Cursos
          </h2>
          <p className="text-secondary-light dark:text-secondary-dark">
            Total de {courses.length} cursos criados
          </p>
        </div>
        <Button className="flex bg-cyan-500 hover:bg-cyan-700 text-white">
          <Plus className="mr-2" />
          Criar Novo Curso
        </Button>
      </div>

      {/* Courses List */}
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {courses.map(course => (
            <div
              key={course.id}
              className="flex gap-4 p-4 bg-white dark:bg-muted-dark rounded-lg border border-border-light dark:border-border-dark hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
            >
              {/* Course Thumbnail */}
              <div className="relative w-48 h-28 flex-shrink-0">
                <Image
                  width={100}
                  height={60}
                  src={course.banner}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2">
                  <Badge
                    className="bg-white/90 dark:bg-background-dark/90"
                  >
                    {course.status === 'published' ? 'Publicado' : 'Rascunho'}
                  </Badge>
                </div>
              </div>

              {/* Course Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-text-light dark:text-text-dark">
                      {course.title}
                    </h3>
                    <p className="text-sm text-secondary-light dark:text-secondary-dark mt-1 line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                  <Badge className={course.price === "0" ? "bg-green-500" : "bg-cyan-500"}>
                    {course.price === "0" ? "Gratuito" : `R$ ${parseFloat(course.price).toFixed(2)}`}
                  </Badge>
                </div>

                <div className="mt-4 flex items-center gap-6">
                  <div className="flex items-center text-sm text-secondary-light dark:text-secondary-dark">
                    <Users className="h-4 w-4 mr-1" />
                    {course.studentsCount} alunos
                  </div>
                  <div className="flex items-center text-sm text-secondary-light dark:text-secondary-dark">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.lessonsCount} aulas
                  </div>
                  {course.status === 'draft' && (
                    <div className="flex items-center text-sm text-secondary-light dark:text-secondary-dark">
                      <Clock className="h-4 w-4 mr-1" />
                      Progresso: {course.progress}
                    </div>
                  )}

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
          ))}
        </div>
      </ScrollArea>
    </main>
  )
}
