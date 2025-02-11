"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Chapter as IChapter, Status } from "@/domains/journey/api/@types";
import { useNavigation } from "@/hooks/use-navigation";
import { cn } from "@/lib/utils";
import { useStore } from "@/shared/store/use-store";
import { Play } from "lucide-react";
import { useState } from "react";

interface IProps {
  chapter: IChapter;
  index: number;
}

export function Chapter({ chapter, index }: IProps) {
  const { setChapter } = useStore();
  const [disabled] = useState(() => chapter.status === Status.UNAVAILABLE);
  const navigation = useNavigation();

  function handleClick() {
    if (disabled) return;

    setChapter(chapter)

    navigation.toChapter();
  }
  
  return (
    <div 
      onClick={handleClick}
      className={cn(
        "w-full border-solid border-cyan-500/20 border-2 h-full px-4 py-4 justify-between flex flex-col z-50 rounded-xl overflow-hidden relative transition-all space-y-2",
        !disabled && 'cursor-pointer hover:scale-101 hover:border-cyan-500'
      )}
      >
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <span 
            className={cn(
              "text-sm text-white bg-cyan-500 px-3 font-medium py-1 rounded-full block w-fit tracking-wide",
              disabled && 'bg-cyan-500/50'
            )}
          >
            Capítulo {index}
          </span>

          <div>
            <strong className="text-base tracking-wide font-bold">
              {chapter.name}
            </strong>
            <p className="text-sm text-gray-500">{chapter.description}</p>
          </div>

        </div>

        <div>
          <Button size="icon" disabled={disabled} className="w-10 h-10 rounded-full">
            <Play className="fill-white size-10" />
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <span className="text-xs text-gray-500">
          {chapter.lessonsAccomplished} de {chapter.lessonsCount} lições concluídas
        </span>
        <Progress 
          disabled={disabled}
          value={chapter.lessonsAccomplished * 100 / chapter.lessonsCount} 
        />
      </div>
    </div>
  ); 
}