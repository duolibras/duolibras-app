"use client"

import { ModuleType } from "@/domains/lesson/api/@types";
import { useMemo, useState } from "react";

import { useNavigation } from "@/hooks/use-navigation";
import { questions } from "@/shared/store/mocks/questions";
import { useStore } from "@/shared/store/use-store";
import { LessonFooter } from "./components/lesson-footer";
import { LessonHeader } from "./components/lesson-header";
import { Content } from "./content/content";
import { Question } from "./question/question";


export function LessonContent() {
    const { modules } = useStore();
    const navigation = useNavigation();

  const [step, setStep] = useState<number>(0);
  const [selected, setSelected] = useState("");
  const currentModule = useMemo(() => modules[step], [modules, step]);


  function onComplete() {
    navigation.toLessonComplete();
  }

  function handleContinue() {
    setSelected("");
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
                selected={questions[currentModule.questionId!].answers.find(answer => answer.id === selected)?.id || ""}
                onSelected={setSelected}
              />
        }
  
      <LessonFooter type={currentModule.type} selected={currentModule.type === ModuleType.CONTENT || !!selected} onContinue={handleContinue} />
    </div>
  );
}
