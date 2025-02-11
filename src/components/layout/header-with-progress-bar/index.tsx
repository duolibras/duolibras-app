"use client"

import React from "react"

import { BottomModal } from "@/components/ui/bottom-modal"
import { CloseButton } from "./components/close-button"

import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"

export const HeaderProgress = ({ progress }: { progress: number }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false);

  const leaveThePage = () => {
    router.replace('welcome');
    closeModal();
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <header className="flex items-center w-full gap-4 px-6">
      <CloseButton onClose={openModal} />
      <Progress value={progress} />
      <BottomModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Deseja sair?" subtitle="Seu progresso será perdido se você sair agora" primaryButton={{ label: "CONTINUAR", action: () => setIsOpen(false) }} secondaryButton={{ label: "QUERO SAIR", action: leaveThePage }} />
    </header>
  )
}
