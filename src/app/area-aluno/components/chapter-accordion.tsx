
import { LessonList } from "./lesson-list";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Chapter, Status } from "@/domains/journey/api/@types";
import { cn } from "@/lib/utils";

export function ChapterAccordion({ chapter, chapterNumber }: { chapter: Chapter, chapterNumber: number }) {
  return (
    <Accordion type="single" collapsible className="border-none">
      <AccordionItem value={chapter.id} className={cn(
        "mb-2 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-border-light dark:border-border-dark",
        chapter.status === Status.UNAVAILABLE && "opacity-50 cursor-not-allowed"
      )}>
        <AccordionTrigger disabled={chapter.status === Status.UNAVAILABLE}>
          <div className="w-full">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-cyan-500/10 text-cyan-500">
                Capítulo {chapterNumber}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark text-left mb-2">{chapter.name}</h3>
            <p className="text-sm text-secondary-light dark:text-secondary-dark text-left mb-4">{chapter.description}</p>

            <div className="max-w-xs space-y-2">
              <div className="flex items-center">
                <span className="text-xs text-secondary-light dark:text-secondary-dark">
                  {chapter.lessons.filter(l => l.status === Status.ACCOMPLISHED).length} de {chapter.lessonsCount} lições concluídas
                </span>
              </div>
              <div className="w-full h-2 bg-muted-light dark:bg-gray-700 rounded-full overflow-hidden mb-1">
                <div
                  className="h-full bg-cyan-500 rounded-full"
                  style={{ width: `${(chapter.lessons.filter(l => l.status === Status.ACCOMPLISHED).length / chapter.lessonsCount) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="px-4">
          <LessonList lessons={chapter.lessons} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
