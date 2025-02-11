import { Menu, Search } from "lucide-react"
import { ContentCard } from "./content-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Assets } from "@/shared/images"

export const CourseContent = () => {
  return (
    <div className="w-full flex flex-col items-center h-fit max-w-lg mx-auto bg-white py-6 px-6">      
      <header className="w-full flex justify-start items-center gap-4">
        <div className="flex items-center gap-4">
        <Menu className="text-gray-300"/>
        <p className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">DuoLibras</p>
        </div>
        <div className="w-full py-4 px-2 bg-gray-50 rounded-lg relative">
          <Search size={16} className="text-gray-400 absolute top-3" />
          <Input label="" aria-placeholder="Pesquise por " className="absolute left-8 top-2 bg-gray-50 text-gray-600"/>
        </div>
        <div className="w-16 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-medium">
          J.V
        </div>
        {/* <div>ℹ️</div> */}
      </header>
      <br />
      <main className="w-full flex flex-col gap-2 pb-20">
        <div className="flex items-center gap-4 overflow-scroll">
          <span className="px-6 py-1 rounded-xl bg-blue-300 text-white cursor-pointer border-2 border-transparent hover:border-blue-200 transition-all duration-300 ease-in">Tudo</span>
          <span className="px-6 py-1 rounded-xl bg-sky-300 text-white cursor-pointer border-2 border-transparent hover:border-sky-200 transition-all duration-300 ease-in">Educação</span>
          <span className="px-6 py-1 rounded-xl bg-rose-300 text-white cursor-pointer border-2 border-transparent hover:border-rose-200 transition-all duration-300 ease-in">Entretenimento</span>
          <span className="px-6 py-1 rounded-xl bg-purple-300 text-white cursor-pointer border-2 border-transparent hover:border-purple-200 transition-all duration-300 ease-in">Esporte</span>
          <span className="px-6 py-1 rounded-xl bg-teal-300 text-white cursor-pointer border-2 border-transparent hover:border-teal-200 transition-all duration-300 ease-in">Rotina</span>
          <span className="px-6 py-1 rounded-xl bg-orange-300 text-white cursor-pointer border-2 border-transparent hover:border-orange-200 transition-all duration-300 ease-in">Beleza</span>
        </div>
        <section className="w-full py-6 overflow-scroll space-y-2">
          <h3 className="text-xl font-medium text-gray-800">Em destaque</h3>
          <div className="flex items-center gap-4">
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </section>
      </main>

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
    </div>
  )
}
