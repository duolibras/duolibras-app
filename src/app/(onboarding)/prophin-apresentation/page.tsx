"use client"

import Image from "next/image";
import { FrameMotionLateral } from "../componets/frame-motion-lateral";
import { OnboardingHeader } from "../componets/onboarding-header";

import { Assets } from "@/shared/images"
import SpeechBubble from "../componets/speech-bubble";
import { all_button_primary_style } from "../componets/style";
import { useRouter } from "next/navigation";

export default function ProphinApresentationScreen() {
  const navigation = useRouter();
    
  function onNextPage() {
    navigation.push('prophin-dialog')
  }

  return (
    <FrameMotionLateral>
      <div className="w-full flex flex-col items-center justify-between h-screen max-w-lg mx-auto bg-white py-6">
        <OnboardingHeader />
        <main className="flex gap-1 items-center animate-[fadeIn_1s_ease-in_0.3s] opacity-0 [animation-fill-mode:forwards]">
          <SpeechBubble>Olá, eu sou o Prophin! 🐬</SpeechBubble>
          <Image src={Assets.SVG.ProphinParaLadoEsquerdo} width={100} height={200} alt="Um golfinho amigável em estilo cartoon, em tom azul claro, sorrindo e parecendo saltar para cima. O golfinho tem linhas simples e limpas com um corpo curvo, uma nadadeira dorsal proeminente e uma expressão divertida com um sorriso largo e um olho circular." />
        </main>

        <footer className="w-full flex flex-col px-4 gap-4">
          <button className={all_button_primary_style} onClick={onNextPage}>CONTINUAR</button>
        </footer>
      </div>
    </FrameMotionLateral>
  )
}
