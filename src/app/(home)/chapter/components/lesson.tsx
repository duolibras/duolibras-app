"use client"

import { Button } from "@/components/ui/button";
import { Lesson as ILesson, Status } from "@/domains/journey/api/@types";
import { useNavigation } from "@/hooks/use-navigation";
import { cn } from "@/lib/utils";
import { Assets } from "@/shared/images";
import { modulesLessons1 } from "@/shared/store/mocks/modules";
import { useStore } from "@/shared/store/use-store";
import { Play } from "lucide-react";
import Image from "next/image";

interface IProps {
  lesson: ILesson;
  first: boolean;
  last: boolean;
  index: number;
  disabled?: boolean;
}

export function Lesson({ lesson, first, last, index, disabled }: IProps) {
  const navigation = useNavigation();
  const { setModules } = useStore();

  const assets = [Assets.SVG.Magnifier, Assets.SVG.Hands, Assets.SVG.BlockPractice, Assets.SVG.BlockReview]

  function handleClick() {
    if (disabled) return;

    setModules(modulesLessons1);

    navigation.toLesson();
  }

  return (
    <div 
      key={lesson.id} 
      onClick={handleClick}
      className={cn(
        "flex gap-6 justify-between items-center transition-all",
      )}
    >
      <div className="relative flex flex-col items-center justify-center h-full">
        <div
          className={cn(
            "w-16 h-16 rounded-full border-2 border-solid border-cyan-500 shrink-0 z-10 bg-cyan-50 flex items-center justify-center",
            !first && 'mt-4',
            !last && 'mb-4',
            lesson.status === Status.AVAILABLE && 'scale-125 border-4'
          )}
        >
          <Image src={assets[index]} alt="Imagem descritiva da lição" />
        </div>
        
        <span 
          className={cn(
            "-z-10 absolute block w-3 h-full bg-cyan-500",
            !last && '-bottom-10',
            !first && '-top-10',
          )}
        />
      </div>

      <div className={cn(
        "w-full p-4 bg-cyan-500/5 rounded-3xl flex items-center justify-between border border-solid border-cyan-500 transition-all",
        !first && 'mt-4',
        !last && 'mb-4',
        !disabled && 'cursor-pointer hover:scale-101'
      )}>
        <div>
          <h2 className="font-bold">Lição {index + 1}</h2>
          <span className="text-sm text-gray-600">{lesson.name}</span>
        </div>

        <div>
          <Button disabled={disabled} size="icon" className="rounded-full">
            <Play className="fill-white" />
          </Button>

        </div>
      </div>
    </div>
  );
}