import { Lesson, Status } from '@/domains/journey/api/@types';
import { Lock, Play } from 'lucide-react';
import Link from 'next/link';

type LessonListProps = {
  lessons: Lesson[];
}

export function LessonList({ lessons }: LessonListProps) {
  return (
    <div className="space-y-2">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="bg-white dark:bg-gray-800/50 
            flex items-center justify-between p-4
            rounded-lg shadow-sm border border-border-light dark:border-border-dark
            hover:bg-muted-light dark:hover:bg-gray-700/70 transition-colors"
        >
          <div>
            <h4 className="text-text-light dark:text-text-dark font-medium">
              {lesson.name}
            </h4>
            <span className="text-secondary-light dark:text-secondary-dark text-sm">
              {lesson.modulesCount} módulos
            </span>
          </div>
 
          {lesson.status === Status.UNAVAILABLE ? (
            <Lock 
              className="w-5 h-5 text-secondary-light dark:text-gray-400" 
              aria-label="Lição bloqueada"
            />
          ) : (
            <Link
              href={`/lesson/${lesson.id}`}
              className="bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 
                transition-colors focus:ring-2 focus:ring-cyan-500 
                focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
              aria-label={`Iniciar lição: ${lesson.name}`}
            >
              <Play className="w-5 h-5 text-white" />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
 }
