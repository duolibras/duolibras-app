"use client"
import { FrameMotionLateral } from "@/app/(onboarding)/componets/frame-motion-lateral";
import { OnboardingHeader } from "@/app/(onboarding)/componets/onboarding-header";
import { all_button_primary_style } from "@/app/(onboarding)/componets/style";
import { useNavigation } from "@/hooks/use-navigation";
import { Assets } from "@/shared/images";
import Image from "next/image";

export default function LessonComplete() {
  const navigation = useNavigation();

  function handleContinue() {
    navigation.toChapter();
  }

  return (
    <FrameMotionLateral>
      <div className="w-full flex flex-col items-center justify-between h-screen max-w-lg mx-auto bg-white py-6">
        <OnboardingHeader />
        <Image className="self-end mx-8" src={Assets.SVG.Shine} width={70} height={70} alt="Ícone de brilho estilizado com oito raios alternando entre amarelo e azul claro, dispostos em padrão radial" />
        <main className="mx-auto">
          <section className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-center w-64 text-yellow-400 text-2xl font-bold">Você acaba de ganhar 50 moedas</h2>

            <div className="flex items-center justify-center gap-4 w-64 p-4 border border-t-8 border-yellow-400 rounded-lg">
              <Image src={Assets.SVG.Gold} width={50} height={50} alt="Ícone de moeda dourada com um brilho estilizado, disposto em um padrão radial" />
              <p className="text-yellow-400 text-lg font-bold">50</p>
            </div>
          </section>
        </main>
        <footer className="w-full flex flex-col gap-4 px-6">
          <button className={all_button_primary_style} onClick={handleContinue}>Continue</button>
        </footer>
      </div>
    </FrameMotionLateral>
  )
}