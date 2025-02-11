"use client"

import { HeaderProgress } from "@/components/layout/header-with-progress-bar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HearingHistoryContent } from "./components/hearing-history-content";
import { HearingLevelContent } from "./components/hearing-level-content";
import { LeadSourceContent } from "./components/lead-source-content";

export default function LeadSourceScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0);
      
  function onNextPage() {
    if (step + 1 === 3) {
      router.push('onboarding-completed');
    }
    setStep((p) => p + 1);
  }

  return (
    <div className="w-full flex flex-col items-center justify-between h-screen max-w-lg mx-auto bg-white py-12">
      <HeaderProgress progress={(step + 1) * 100 / 3} />

      {step === 0 && 
        <LeadSourceContent onNextPage={onNextPage}/>
      }
      {step === 1 && 
        <HearingLevelContent onNextPage={onNextPage}/>
      }
      {step === 2 && 
        <HearingHistoryContent onNextPage={onNextPage}/>
      }
    </div>
  )
}
