"use client"
import Splash from '@/assets/images/splash.svg';
import { Button } from '@/components/ui/button';
import { InteractButton } from '@/components/ui/interactive-button';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { OnboardingHeader } from "./(onboarding)/componets/onboarding-header";

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
        <InteractButton onClick={onNextPage}>COMEÇAR AGORA</InteractButton>
        <Button variant="outline" className='py-6 text-cyan-500 font-bold rounded-xl'>JÁ POSSUO CONTA</Button>
      </footer>
    </div>
  )
}
