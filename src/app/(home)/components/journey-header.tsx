import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { InteractButton } from "@/components/ui/interactive-button";
import { cn } from "@/lib/utils";
import { Assets } from "@/shared/images";
import { LucideMenu, LucideX } from "lucide-react";

import Image from "next/image";

export function JourneyHeader() {
  return (
    <header className="flex w-full items-center justify-between py-2 px-6 fixed top-0 bg-white gap-6 font-bold tracking-wider text-base">
      <Menu />
      <Fire />
      <Money />
      <Hearts />
    </header>
  )
}


export function MenuClose() {
  return (
    <LucideX className="text-cyan-500 hover:text-cyan-700 cursor-pointer transition-all duration-400 ease-in-out"/>
  );
}

export function Menu() {
  return (
    <LucideMenu className="text-cyan-500 hover:text-cyan-700 cursor-pointer transition-all duration-400 ease-in-out"/>
  );
}

export function Heart({ disabled, small }: { disabled?: boolean, small?: boolean }) {
  return (
    <Image className={cn(
      'size-10',
      small && 'size-6'
    )} src={disabled ? Assets.SVG.HeartDisabled : Assets.SVG.Heart} alt="Coração" />
  );
}

export function Hearts() {
  return (
    <Drawer>
      <DrawerTrigger>
        <span className="text-red-500 flex gap-1 items-center font-bold">
          <Heart small />
          5
        </span>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Você está com a vida cheia!
          </DrawerTitle>

          <div className="w-full flex gap-4 py-4 justify-center">
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
          </div>
        </DrawerHeader>

        <DrawerFooter className="pb-10 gap-4">
          <InteractButton variant="secondary" className="py-7 bg-gradient-to-br flex justify-between from-purple-400 to-purple-600 border-purple-600">
            <div className="flex gap-2  items-center">
              <Image src={Assets.SVG.HeartInfinity} alt="coração com infinito" />
              VIDAS ILIMITADAS
            </div>
            <div>
              <span className="uppercase tracking-wide font-bold">Teste grátis</span>
            </div>
          </InteractButton>

          <InteractButton className="w-full py-7 bg-gradient-to-br from-cyan-500 to-cyan-700 flex justify-between" >
            <div className="flex gap-2 items-center">
                <Image src={Assets.SVG.HeartInfinity} alt="coração com infinito" />
                RECUPERAR VIDAS
            </div>
            <div className="flex gap-2 items-center">
              <Image src={Assets.SVG.Money} alt="Moedas" />
              <span className="font-bold tracking-wide">500</span>
            </div>
          </InteractButton>
        </DrawerFooter>
      </DrawerContent>

    </Drawer>
  );
}

export function Fire() {
  return (
    <span className="text-amber-500 flex gap-1 items-center">
      <Image src={Assets.SVG.Fire} alt="Foguinho" />
      500
    </span>
  );
}


export function Money() {
  return (
    <span className="text-yellow-500 flex gap-1 items-center">
      <Image src={Assets.SVG.Money} alt="Dinheiro" />
      2413
    </span>
  );
}