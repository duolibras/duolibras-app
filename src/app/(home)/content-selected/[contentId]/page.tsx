"use client"

import { Header } from "../../components/header";
import { ContentCard } from "../../exclusive-content/components/content-card";
import { CircleX } from "lucide-react";
import { MiniCardContent } from "./components/mini-card-content";
import { useParams } from "next/navigation";
import { contents } from "@/shared/store/mocks/content"

export default function ContentSelected() {
  const params = useParams();
  console.log(params)

  return (
    <div className="w-full flex flex-col items-center h-fit max-w-lg mx-auto bg-white py-6 px-6">
      <Header />
      <br />
      <main className="w-full">
        <ContentCard id={contents[0].id} title={contents[0].title} creator={contents[0].creator} video={contents[0].video} marketing={contents[0].marketing} />
        <br />
        <div className="w-full flex flex-col gap-4 border py-3 rounded-lg">
            <div className="flex space-between px-4">
              <div className="w-full">
                <h4 className="text-xl font-medium">Mais conteúdos</h4>
                <p className="text-gray-400">Esse conteúdo possui outros vídeos</p>
              </div>
              <CircleX className="text-gray-300 hover:text-red-500 cursor-pointer transition-all duration-500 " />
            </div>
            <div>
              <MiniCardContent selected key={contents[0].id} title={contents[0].title} description={contents[0].description} video={contents[0].video} />
              {
                contents.map(content => (
                  <MiniCardContent key={content.id} title={content.title} description={contents[0].description} video={contents[0].video} />
                ))
              }
           </div>
        </div>
      </main>
    </div>
  )
}
