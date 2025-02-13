"use client"

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Assets } from "@/shared/images";
import { useRouter } from "next/navigation";

export function BottomTab() {
  const route = useRouter();
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

    if (tab === 'trilha') {
      route.push('journey')
    } else {
      route.push('exclusive-content')
    }
  }

  return (
    <footer className="w-full fixed bottom-0 flex justify-around items-center bg-gray-50 pt-6 pb-10 z-50">
      <Button 
        className={`w-full flex flex-col bg-gray-50 hover:bg-gray-50  ${effect.trilha && "animate-wiggle"}`} 
        onClick={() => toogleTab("trilha")}
      >
        <Image src={Assets.SVG.TrilhaIcon} width={40} height={40} alt="Trilha" />
        <span className={`${selected.trilha ? 'text-gray-700 ' : 'text-gray-500 font-normal'}`}>TRILHA DE ESTUDO</span>
      </Button>
      <Button 
        className={`w-full flex flex-col bg-gray-50 hover:bg-gray-50 ${effect.content && "animate-wiggle"}`} 
        onClick={() => toogleTab("content")}
      >
        <Image src={Assets.SVG.ContentIcon} width={40} height={40} alt="Content" />
        <span className={`${selected.content ? 'text-gray-700 ' : 'text-gray-500 font-normal'}`}>CONTEÚDO EXCLUSIVO</span>
      </Button>
    </footer>
  )
}
