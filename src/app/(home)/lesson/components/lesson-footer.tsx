"use client"

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { InteractButton } from "@/components/ui/interactive-button";
import { ModuleType } from "@/domains/lesson/api/@types";
import { useState } from "react";

interface IProps {
  selected: boolean;
  onContinue(): void;
  type: ModuleType;
}

export function LessonFooter({ selected, onContinue , type }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleContinue() {
    setIsOpen(false);
    onContinue();
  }

  function handleClick() {
    if (type === ModuleType.QUESTION) {
      setIsOpen(true);
    }else {
      handleContinue()
    }
  }

  return (
    <footer className="fixed bottom-0 w-full p-6 z-20">
      <Drawer modal={false} open={isOpen}>
        <DrawerTrigger asChild>
          <InteractButton disabled={!selected} onClick={handleClick}>
            Continuar
          </InteractButton>
        </DrawerTrigger>

        <DrawerContent className="bg-emerald-500/40">
          <DrawerHeader>
            <DrawerTitle className="text-emerald-500">Correto</DrawerTitle>
          </DrawerHeader>
          <div className="w-full pb-6 px-6">
            <InteractButton onClick={handleContinue} disabled={!selected}>
              Continuar
            </InteractButton>
          </div>
        </DrawerContent>
      </Drawer>
    </footer>
  )
}
