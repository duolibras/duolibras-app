"use client"

import { ModuleType } from "@/domains/lesson/api/@types";
import { useMemo, useState } from "react";

import { useNavigation } from "@/hooks/use-navigation";
import { useStore } from "@/shared/store/use-store";
import { LessonFooter } from "./components/lesson-footer";
import { LessonHeader } from "./components/lesson-header";
import { Content } from "./content/content";
import { Question } from "./question/question";


export function LessonContent() {
    const { modules } = useStore();
    const navigation = useNavigation();

  const [step, setStep] = useState<number>(0);
  const currentModule = useMemo(() => modules[step], [modules, step]);


  function onComplete() {
    navigation.toLessonComplete();
  }

  function handleContinue() {
    if (step + 1 < modules.length) {
      setStep(step + 1)
    } else {
      onComplete();
    }
  }

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
              />
        }
  
      <LessonFooter onContinue={handleContinue} />
    </div>
  );
}