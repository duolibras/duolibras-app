"use client"
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { InteractButton } from "@/components/ui/interactive-button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Hearts, Menu, MenuClose } from "../../components/journey-header";

interface IProps {
  step: number;
  totalSteps: number;
}

export function LessonHeader({ step, totalSteps }: IProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function handleQuit() {
    router.replace('/chapter');
  }

  return (
    <div>
      <header className="p-6 flex justify-between items-center gap-6">
        <Drawer onOpenChange={setIsOpen}>
          <DrawerTrigger>
            {isOpen 
              ? <MenuClose />
              : <Menu />
            }
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Quer mesmo sair?</DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <InteractButton>
                  Continuar aprendendo
                </InteractButton>
              </DrawerClose>
              <Button onClick={handleQuit} className="py-6 text-cyan-500 rounded-lg uppercase font-bold" variant="outline">
                Sair da lição
              </Button>


              <Button 
                className="py-6 rounded-lg uppercase tracking-wide text-gray-500" 
                variant="ghost"
              >
                Compartilhar feedback
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Progress value={(step + 1) * 100 / totalSteps} />

        <Hearts />
      </header>
    </div>
  );
}