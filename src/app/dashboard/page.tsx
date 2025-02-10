// import { TrilhaContent } from "./components/trilha-content";
// import { CourseContent } from "./components/course-content";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import { Assets } from "@/shared/images";

export default function DashboardScreen() {
  return (
    <div className="w-full flex flex-col items-center justify-between h-screen max-w-lg mx-auto bg-white pt-12">
      {/* <DashboardContent /> */}

      <footer className="w-full flex justify-center items-center gap-24 position-fixed bottom-0 bg-gray-100 h-20">
        <div className="flex flex-col items-center">
          <button>
             {/* TODO: Melhorar alt */}
            <Image src={Assets.SVG.TrilhaIcon} width={40} height={40} alt="Trilha" />
          </button>
          <p className="text-gray-500">Trilha</p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col items-center"> 
          <button>
            <Image src={Assets.SVG.ContentIcon} width={40} height={40} alt="Content"/>
          </button>
          <p className="text-gray-500">Conteúdo</p>
        </div>
      </footer>
    </div>
  )
}
