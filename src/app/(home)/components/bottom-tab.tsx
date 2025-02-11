"use client"

import Image from "next/image"
import { useState } from "react";

import { Assets } from "@/shared/images"
import { Button } from "@/components/ui/button";

export function BottomTab() {
  const [selected, setSelected] = useState({
    trilha: true,
    content: false
  });

  const [effect, setEffect] = useState({
    trilha: true,
    content: false
  });

  const toogleTab = (tab: string) => {
    setEffect({
      trilha: tab === "trilha" && !effect.trilha,
      content: tab === "content" && !effect.content
    })

    setSelected({
      trilha: tab === "trilha" && !selected.trilha,
      content: tab === "content" && !selected.content
    })
  }

  return (
    <footer className="w-full fixed bottom-0 flex justify-around items-center bg-gray-50 h-20">
      <Button className={`w-full flex flex-col bg-transparent hover:bg-transparent ${effect.trilha && "animate-wiggle"}`} onClick={() => toogleTab("trilha")}>
        <Image src={Assets.SVG.TrilhaIcon} width={40} height={40} alt="Trilha" />
        <span className={`${selected.trilha ? 'text-gray-700 ' : 'text-gray-500 font-normal'}`}>TRILHA DE ESTUDO</span>
      </Button>
      <Button className={`w-full flex flex-col bg-transparent hover:bg-transparent ${effect.content && "animate-wiggle"}`} onClick={() => toogleTab("content")}>
        <Image src={Assets.SVG.ContentIcon} width={40} height={40} alt="Content" />
        <span className={`${selected.content ? 'text-gray-700 ' : 'text-gray-500 font-normal'}`}>CONTEÚDO EXCLUSIVO</span>
      </Button>
    </footer>
  )
}
