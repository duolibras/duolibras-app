import { Lock, Play } from 'lucide-react';
import { ChapterAccordion } from './chapter-accordion';
import { Status, Unit } from '@/domains/journey/api/@types';

export function UnitList({ units }: { units: Unit[] }) {
  return (
    <div className="space-y-8">
      {units.map((unit) => (
        <section
          key={unit.id}
          className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-border-light dark:border-border-dark"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">
                {unit.name}
              </h2>
              <p className="text-secondary-light dark:text-secondary-dark">
                {unit.chaptersCount} capítulos
              </p>
            </div>

            {unit.status === Status.UNAVAILABLE ? (
              <Lock className="w-6 h-6 text-gray-400" aria-label="Unidade bloqueada" />
            ) : (
              <Play className="w-6 h-6 text-cyan-500" aria-label="Unidade disponível" />
            )}
          </div>

          <div className="space-y-4">
            {unit.chapters.map((chapter) => (
              <ChapterAccordion
                key={chapter.id}
                chapter={chapter}
                chapterNumber={unit.chapters.indexOf(chapter) + 1}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
