"use client"

import { Module, ModuleType } from "@/domains/lesson/api/@types";
import { useMemo, useState } from "react";
import { LessonFooter } from "./components/lesson-footer";
import { LessonHeader } from "./components/lesson-header";
import { Content } from "./content/content";
import { Question } from "./question/question";
import { questions } from "@/shared/store/mocks/questions";

interface IProps {
  modules: Module[];
}

export function LessonContent({ modules }: IProps) {
  const [step, setStep] = useState<number>(0);
  const [selected, setSelected] = useState("");
  const currentModule = useMemo(() => modules[step], [modules, step]);

  return (
    <div>
      <LessonHeader step={step} totalSteps={modules.length} />
        {
          currentModule.type === ModuleType.CONTENT
            ? <Content 
                key={currentModule.contentId!}
                contentId={currentModule.contentId!} 
              />
            : <Question 
                key={currentModule.questionId!} 
                questionId={currentModule.questionId!}
                selected={questions[currentModule.questionId!].answers.find(answer => answer.id === selected)?.id || ""}
                onSelected={setSelected}
              />
        }
  
      <LessonFooter selected={currentModule.type === ModuleType.CONTENT || !!selected} onContinue={() => setStep(step + 1)} />
    </div>
  );
}
