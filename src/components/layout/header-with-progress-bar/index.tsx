"use client"

import React from "react"

import { CloseButton } from "./components/close-button"
import { BottomModal } from "@/components/ui/bottom-modal"

import { useRouter } from "next/navigation"

export const HeaderProgress = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false);

  const leaveThePage = () => {
    router.replace('welcome');
    closeModal();
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <header className="flex items-center gap-4">
      <CloseButton onClose={closeModal} />
      <div className="w-96 bg-gray-200 h-8 rounded-2xl" />
      <BottomModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Deseja sair?" subtitle="Seu progresso será perdido se você sair agora" primaryButton={{ label: "CONTINUAR", action: () => setIsOpen(false) }} secondaryButton={{ label: "QUERO SAIR", action: leaveThePage }} />
    </header>
  )
}
