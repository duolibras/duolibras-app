"use client"
import Image from 'next/image';
import { Assets } from '@/shared/images';

export const OnboardingHeader = () => {
  return (
    <header className="flex gap-4 align-center animate-[fadeIn_1s_ease-in]">
      <Image src={Assets.SVG.Mascote} width={30} height={30} alt="Logo do DuoLibras: silhueta de um golfinho azul em posição vertical" />
      <p className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">DuoLibras</p>
    </header>
  )
}
