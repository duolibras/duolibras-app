"use client"
import React from "react";

import { LeadSourceContent } from "./components/lead-source-content";
import { useRouter } from "next/navigation";
import { HeaderProgress } from "@/components/layout/header-with-progress-bar";

export default function LeadSourceScreen() {
  const navigation = useRouter();
      
  function onNextPage() {
    navigation.push('/hearing-level')
  }

  return (
    <div className="w-full flex flex-col items-center justify-between h-screen max-w-lg mx-auto bg-white py-12">
      <HeaderProgress />
      <LeadSourceContent onNextPage={onNextPage}/>
    </div>
  )
}
