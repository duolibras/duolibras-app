"use client"

import React from "react";
import { useRouter } from "next/navigation";

import { HearingHistoryContent } from "./components/hearing-history-content";
import { HeaderProgress } from "@/components/layout/header-with-progress-bar";

export default function HearingLevelScreen() {
  const navigation = useRouter();
      
  function onNextPage() {
    navigation.push('/onboarding-completed')
  }

  return (
    <div className="w-full flex flex-col items-center justify-between h-screen max-w-lg mx-auto bg-white py-12">
      <HeaderProgress />
      <HearingHistoryContent onNextPage={onNextPage} />
    </div>
  )
}
