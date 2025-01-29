import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Module } from "@/domains/lesson/api/@types";

interface LessonHeaderProps {
  currentModuleIndex: number;
  modules: Module[];
  progress: number;
}
export const LessonHeader = ({
  currentModuleIndex,
  modules,
  progress,
}: LessonHeaderProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 
                 shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 h-full w-1 bg-white/20 animate-pulse" />
        </div>
      </div>

      <div className="flex w-full mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Módulo {currentModuleIndex + 1} de {modules.length}
        </h1>

        <div className="fixed top-7 right-4 flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full pr-2 pl-4 py-1.5 shadow-lg">
          <div className="w-24 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full
                   transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
            </div>
          </div>
          {/* <span className="font-medium text-gray-700 dark:text-gray-300 min-w-[2.5rem] text-right">
            {Math.round(progress)}%
          </span> */}
        <ThemeToggle />
        </div>
      </div>
    </>
  );
}
