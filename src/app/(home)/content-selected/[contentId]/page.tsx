import { Header } from "../../components/header";
import { ContentCard } from "../../exclusive-content/components/content-card";
import { CircleX } from "lucide-react";
import { MiniCardContent } from "./components/mini-card-content";
import Image from "next/image";
import Curso from "@/assets/images/course.avif";
import { AspectRatio } from "@/components/ui/aspect-ratio";
        
export default function ContentSelected() {
  return (
    <div className="w-full flex flex-col items-center h-screen max-w-lg mx-auto bg-white py-6 px-6">
      <Header />
      <br />
      <main className="w-full">
        <ContentCard />
        <br />
        <div className="w-full flex flex-col gap-4 border py-3 rounded-lg">
            <div className="flex space-between px-4">
              <div className="w-full">
                <h4 className="text-xl font-medium">Mais conteúdos</h4>
                <p className="text-gray-400">jfrjfirngtngvirtugjigjrgroi</p>
              </div>
              <CircleX className="text-gray-300 hover:text-red-500 cursor-pointer transition-all duration-500 " />
            </div>
            <div>
              <MiniCardContent selected />
              <MiniCardContent />
              <MiniCardContent />
              <MiniCardContent />
           </div>
        </div>
      </main>
    </div>
  )
}
