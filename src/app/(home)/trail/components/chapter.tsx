"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Chapter as IChapter, Status } from "@/domains/journey/api/@types";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { useState } from "react";

interface IProps {
  chapter: IChapter;
  index: number;
}

export function Chapter({ chapter, index }: IProps) {
  const [disabled] = useState(() => chapter.status === Status.UNAVAILABLE);
  
  return (
    <div className={cn(
      "w-full border-solid border-cyan-500 border h-full px-4 py-4 justify-between flex flex-col z-50 rounded-xl overflow-hidden relative transition-all space-y-2",
      !disabled && 'cursor-pointer hover:scale-101'
    )}>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <span 
            className={cn(
              "text-sm bg-cyan-500/20 px-2 font-medium py-1 rounded-full block w-fit tracking-wide",
              disabled && 'bg-cyan-500/5'
            )}
          >
            Capítulo {index}
          </span>

          <div>
            <strong className="text-base tracking-wide font-bold">
              {chapter.name}
            </strong>
            <p className="text-sm">{chapter.description}</p>
          </div>

        </div>

        <div>
          <Button size="icon" disabled={disabled} className="w-10 h-10 rounded-full">
            <Play className="fill-white size-10" />
          </Button>
        </div>
      </div>
      <div className="space-y-1">
        <span className="text-xs">
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