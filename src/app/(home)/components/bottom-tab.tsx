import { Button } from "@/components/ui/button";
import Image from "next/image"
import { Assets } from "@/shared/images"

export function BottomTab() {
  return (
    <footer className="w-full fixed bottom-0 flex justify-around items-center bg-gray-50 h-20">
        <Button className="w-full flex flex-col bg-transparent hover:bg-transparent">
          <Image src={Assets.SVG.TrilhaIcon} width={40} height={40} alt="Trilha" />
          <span className="text-gray-700">TRILHA DE ESTUDO</span>
        </Button>
        <Button className="w-full flex flex-col bg-transparent hover:bg-transparent">
          <Image src={Assets.SVG.ContentIcon} width={40} height={40} alt="Content"/>
          <span className="text-gray-500 font-normal">CONTEÚDO EXCLUSIVO</span>
        </Button>
      </footer>
  )
}
