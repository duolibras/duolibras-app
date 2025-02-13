"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Curso from "@/assets/images/course.avif";
import { useRouter } from "next/navigation";

interface ContentCardProps {
  title?: string;
  creator?: string;
  image?: string;
  profileImage?: string;
  videosLength?: number;
}
export const ContentCard = ({
  title = "Aprenda Libras com a DuoLibras",
  creator = "Professor Carlos",
  // image,
  // profileImage,
  videosLength = 8,
}: ContentCardProps) => {
  const navigation = useRouter();
  return (  
    <div className="min-w-80 border border-gray-100 rounded-lg cursor-pointer hover:border-2 hover:border-sky-200 transition-all duration-100 ease-in hover:scale-98" onClick={() => {
      navigation.push("content-selected/1")
    }}>
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src={Curso}
          alt="Photo by Drew Beamer"
          fill
          className="w-full rounded-t-md object-cover"
        />
        <span>{videosLength} aulas</span>
      </AspectRatio>
      <div className="flex gap-4 p-4">
        <Image
          src={Curso}
          alt="Photo by Drew Beamer"
          width={40}
          height={40}
          className="size-10 overflow-hidden rounded-full object-cover"
        />
        <div>
          <h3 className="text-gray-800 font-medium">{title}</h3>
          <p className="text-gray-500 font-light ">{creator}</p>
        </div>
      </div>
    </div>
  );
}
