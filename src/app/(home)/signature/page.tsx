"use client"

import { Button } from "@/components/ui/button";
import { InteractButton } from "@/components/ui/interactive-button";
import { useNavigation } from "@/hooks/use-navigation";
import { Assets } from "@/shared/images";
import { LucideDollarSign, LucideHeart, LucideInfinity, LucideVideoOff } from "lucide-react";
import Image from "next/image";

export default function SignaturePage() {
  const navigation = useNavigation();

  function handleCancel() {
    navigation.goBack();
  }

  return (
    <div className="h-full w-full">
      <header className="space-y-10 relative flex items-center flex-col justify-center bg-gradient-to-r from-cyan-500 to-cyan-700">
        <div className="py-10 px-8 space-y-6">
          <div className="flex justify-end w-full">
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 px-4 py-1 rounded-full text-white font-bold">
              Dolphin
            </span>
          </div>
          <h1 className="font-bold text-3xl text-center text-gray-300">
            Quem usa <span className="text-gray-200">Dolphin</span> aprende mais rápido
          </h1>
        </div>

        <div className="rounded-t-full h-10 w-full bg-gray-100" />

        <div className="absolute -bottom-10 left-10">
          <Image src={Assets.PNG.Logo} alt="Logo duolibras" className="size-40" />
        </div>
      </header>

      <div className="px-8 flex flex-col h-full mt-12">
        <div className="font-bold text-2xl space-y-8">
          <div className="flex gap-4 items-center text-gray-700">
            <LucideVideoOff className="text-cyan-500" size={40} />
            Sem anúncios
          </div>
          <div className="flex gap-4 items-center text-gray-700">
            <LucideHeart className="text-cyan-500" size={40} />
            Vidas Ilimitadas
          </div>
          <div className="flex gap-4 items-center text-gray-700">
            <LucideInfinity className="text-cyan-500" size={40} />
            Acesso a trilhas avançadas
          </div>
          <div className="flex gap-4 items-center text-gray-700">
            <LucideDollarSign className="text-cyan-500" size={40} />
            Apenas R$ 4,99 por mês
          </div>
        </div>
      </div>


      <footer className="fixed bottom-0 w-full p-8">
        <div className="flex items-center justify-center flex-col space-y-4 w-full">
        <span className="text-2xl text-gray-500 text-center">Cancele a qualquer hora, sem multas ou taxas</span>

          <InteractButton onClick={handleCancel} className="py-7">Experimente grátis por 7 dias</InteractButton>
          <Button onClick={handleCancel} className="text-lg font-bold text-cyan-500 py-6 w-full" variant="ghost">Agora não</Button>
        </div>
      </footer>
    </div>
  );
}