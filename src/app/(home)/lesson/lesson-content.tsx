"use client"

import { Module, ModuleType } from "@/domains/lesson/api/@types";
import { useMemo, useState } from "react";
import { LessonFooter } from "./components/lesson-footer";
import { LessonHeader } from "./components/lesson-header";
import { Content } from "./content/content";
import { Question } from "./question/question";

interface IProps {
  modules: Module[];
}

export function LessonContent({ modules }: IProps) {
  const [step, setStep] = useState<number>(0);

  const modulee = useMemo(() => modules[step], [modules, step]);

  return (
    <div>
      <LessonHeader step={step} totalSteps={modules.length} />
        {
          modulee.type === ModuleType.CONTENT
            ? <Content 
                key={modulee.contentId!} 
              />
            : <Question 
                key={modulee.questionId!} 
              />
        }
  
      <LessonFooter onContinue={() => setStep(step + 1)} />
    </div>
  );
}