"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

import { FrameMotionLateral } from "../componets/frame-motion-lateral";
import { OnboardingHeader } from "../componets/onboarding-header";

import { Button } from "@/components/ui/button";
import { InteractButton } from "@/components/ui/interactive-button";
import { Assets } from '@/shared/images';

export default function OnboardingCompletedScreen() {
  const router = useRouter();

  function onNextPage() {
    router.push('choose-path')
  }
  return (
    <FrameMotionLateral>
      <div className="w-full flex flex-col items-center justify-between h-screen max-w-lg mx-auto bg-white py-6">
        <OnboardingHeader />
        <h2 className="w-80 text-center text-gray-700 text-2xl font-bold">Obrigado por nos ajudar a te conhecer melhor 🐬</h2>
        <Image className="self-end mx-8" src={Assets.SVG.Shine} width={70} height={70} alt="Ícone de brilho estilizado com oito raios alternando entre amarelo e azul claro, dispostos em padrão radial" />
        <main className="mx-auto">
          <section className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-center w-64 text-yellow-400 text-2xl font-bold">Você acaba de ganhar 100 moedas</h2>

            <div className="flex items-center justify-center gap-4 w-64 p-4 border border-t-8 border-yellow-400 rounded-lg">
              <Image src={Assets.SVG.Gold} width={50} height={50} alt="Ícone de moeda dourada com um brilho estilizado, disposto em um padrão radial" />
              <p className="text-yellow-400 text-lg font-bold">100</p>
            </div>
          </section>
        </main>
        <footer className="w-full flex flex-col gap-4 px-6">
          <p className="text-gray-400 text-sm font-medium text-center">para obter as moedas crie uma conta</p>
          <InteractButton onClick={onNextPage}>CRIAR CONTA AGORA</InteractButton>
          <Button onClick={onNextPage} variant="outline" className='py-6 text-cyan-500 font-bold rounded-xl'>Agora não</Button>

        </footer>
      </div>
    </FrameMotionLateral>
  )
}
