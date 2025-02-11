import { Header } from "../../components/header";
import { ContentCard } from "../../exclusive-content/components/content-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Curso from "@/assets/images/course.avif";
import { CircleX } from "lucide-react";

export default function ContentSelected() {
  return (
    <div className="w-full flex flex-col items-center h-screen max-w-lg mx-auto bg-white py-6 px-6">
      <Header />
      <br />
      <main className="w-full">
        <ContentCard />
        <br />
        <div className="w-full flex flex-col gap-4 border p-4 rounded-lg">
          <div>
            <div className="flex space-between">
              <div className="w-full">
                <h4 className="text-xl font-medium">Mais conteúdo</h4>
                <p>jfrjfirngtngvirtugjigjrgroi</p>
              </div>
              <CircleX className="hover:text-red-500 cursor-pointer transition-all duration-500" />
            </div>
            <br />
            <div className="w-full flex">
              <AspectRatio ratio={16 / 9} className="w-48 h-24 bg-muted">
                <Image
                  src={Curso}
                  alt="Photo by Drew Beamer"
                  fill
                  className="w-full object-cover"
                />
              </AspectRatio>
              <div className="w-full flex flex-col gap-2">
                <h5 className="text-gray-800 ">Titulo</h5>
                <p>Descrição</p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
