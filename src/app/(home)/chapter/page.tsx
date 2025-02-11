"use client"

import { Button } from "@/components/ui/button";
import { Status } from "@/domains/journey/api/@types";
import { useStore } from "@/shared/store/use-store";
import { ChevronLeft } from "lucide-react";
import { Lesson } from "./components/lesson";

export default function Chapter() {
  const { chapter } = useStore();

  if (!chapter) return;

  return (
    <div className="h-full">
      <header className="px-6 py-10 flex flex-col items-center">
        <div className="flex justify-between w-full">
          <ChevronLeft />

          <div className="flex gap-2 font-bold tracking-wider text-lg">
            <span className="text-amber-500">500</span>
            <span className="text-red-500">5</span>
          </div>
        </div>

        <h1 className="text-3xl font-medium">{chapter.name}</h1>
        <span className="text-xl">{chapter.description}</span>

        {/* <Image src="" alt="" /> */}
      </header>
      <main className="px-6 h-full">
        {chapter.lessons.map((lesson, index) => (
          <Lesson 
            key={lesson.id}
            lesson={lesson}
            index={index}
            first={index === 0}
            last={chapter.lessons.length -1 === index}
            disabled={lesson.status === Status.UNAVAILABLE}
          />
        ))}
      </main>

      <footer className="fixed bottom-0 w-full p-6 z-20">
        <Button className="w-full h-12">Continuar</Button>
      </footer>
    </div>
  );
}