import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Image from "next/image";
import Curso from "@/assets/images/course.avif";

export const MiniCardContent = ({
  selected = false,
}: {
  selected?: boolean
}) => {
  return (
    <div className={`w-full h-28 flex ${selected && 'bg-sky-100'} px-4 py-2 cursor-pointer ${!selected && 'hover:bg-sky-50'} transition-all duration-300`}>
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
        <p className="text-gray-400">Descrição</p>
      </div>
    </div>
  )
}
