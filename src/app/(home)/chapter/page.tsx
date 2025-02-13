"use client"

import { InteractButton } from "@/components/ui/interactive-button";
import { PageSlide } from "@/components/ui/page-slide";
import { Status } from "@/domains/journey/api/@types";
import { useNavigation } from "@/hooks/use-navigation";
import { useStore } from "@/shared/store/use-store";
import { ChevronLeft } from "lucide-react";
import { Fire, Hearts, Money } from "../components/journey-header";
import { Lesson } from "./components/lesson";

export default function Chapter() {
  const { chapter } = useStore();
  const navigation = useNavigation();

  if (!chapter) return;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <PageSlide>
      <div className="h-full">
        <header className="px-6 pb-10 pt-6 gap-6 flex flex-col items-center bg-cyan-500/20">
          <div className="flex justify-between items-center w-full">
            <div className="cursor-pointer" onClick={handleGoBack}>
              <ChevronLeft />
            </div>

            <div className="flex gap-4 font-bold tracking-wider text-lg">
              <Money />
              <Fire />
              <Hearts />
            </div>
          </div>

          <div className="flex items-center flex-col">
            <h1 className="text-3xl font-medium">{chapter.name}</h1>
            <span className="text-xl">{chapter.description}</span>
          </div>


          {/* <Image src="" alt="" /> */}
        </header>
        <main className="p-6 h-full">
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
          <InteractButton>Continuar</InteractButton>
        </footer>
      </div>
    </PageSlide>
  );
}