import { Lesson, Status } from '@/domains/journey/api/@types';
import { Lock, Play } from 'lucide-react';
import Link from 'next/link';

export function LessonItem({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
      <div>
        <h4 className="font-medium">{lesson.name}</h4>
        <p className="text-sm text-gray-400">{lesson.modulesCount} módulos</p>
      </div>

      {lesson.status === Status.UNAVAILABLE ? (
        <Lock className="w-5 h-5 text-gray-400" aria-label="Lição bloqueada" />
      ) : (
        <Link
          href={`/learn/lesson/${lesson.id}`}
          className="bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition-colors"
          aria-label={`Iniciar lição: ${lesson.name}`}
        >
          <Play className="w-5 h-5 text-white" />
        </Link>
      )}
    </div>
  );
}
