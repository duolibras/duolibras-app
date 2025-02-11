"use client"
import Splash from '@/assets/images/splash.svg';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { OnboardingHeader } from "./(onboarding)/componets/onboarding-header";
import { all_button_primary_style, all_button_secondary_style } from "./(onboarding)/componets/style";

export default function WelcomeScreen() {
  const navigation = useRouter();
  
  function onNextPage() {
    navigation.push('prophin-apresentation')
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen max-w-lg mx-auto bg-white py-6">
      <OnboardingHeader />

      <main className="flex flex-col gap-6 animate-[fadeIn_1s_ease-in_0.3s] opacity-0 [animation-fill-mode:forwards] px-6">
        <Image className="self-center" src={Splash} width={200} height={200} alt="Ilustração lúdica com um golfinho azul sorridente, um personagem de moletom rosa fazendo sinal de positivo, um personagem de cabelo roxo e uma tela de celular com moedas douradas, representando o aprendizado gamificado de Libras" />
        <h3 className="max-w-96 block text-3xl text-center font-bold text-gray-700">O jeito simples e divertido e de aprender libras!</h3>
      </main>

      <footer className="w-full flex flex-col px-6 gap-4">
        <button className={all_button_primary_style} onClick={onNextPage}>COMEÇAR AGORA</button>
        <button className={all_button_secondary_style}>JÁ POSSUO CONTA</button>
      </footer>
    </div>
  )
}
