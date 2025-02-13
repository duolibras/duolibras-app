"use client";

import Curso from "@/assets/images/course.avif";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ContentCardProps {
  id: string;
  title?: string;
  creator?: string;
  image?: string;
  profileImage?: string;
  video?: string;
  marketing?: string
}

export const ContentCard = ({
  id = "",
  title = "Aprenda Libras com a DuoLibras",
  creator = "Professor Carlos",
  // image,
  // profileImage,
  video = "",
  marketing = ""
}: ContentCardProps) => {
  const navigation = useRouter();
  return (  
    <div className="min-w-80 border border-gray-100 rounded-lg cursor-pointer hover:border-2 hover:border-sky-200 transition-all duration-100 ease-in hover:scale-98" onClick={() => {
      navigation.push(`content-selected/${id}`)
    }}>
      <AspectRatio ratio={16 / 9} className="bg-muted relative">
        <video autoPlay preload="auto" loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <span className="absolute bottom-2 right-2 px-4 py-1 bg-cyan-400 text-gray-100 tracking-wide rounded-2xl">{marketing}</span>
      </AspectRatio>
      <div className="flex items-start gap-4 p-4">
        <Image
          src={Curso}
          alt="Photo by Drew Beamer"
          width={40}
          height={40}
          className="size-10 overflow-hidden rounded-full object-cover"
        />
        <div>
          <h3 className="text-gray-800 font-medium truncate">{title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-500 font-light">{creator}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
