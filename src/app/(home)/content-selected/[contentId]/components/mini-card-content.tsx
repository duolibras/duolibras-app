import { AspectRatio } from "@radix-ui/react-aspect-ratio"

export const MiniCardContent = ({
  selected = false,
  title = "",
  description = "",
  video = "",
}: {
  selected?: boolean;
  title: string;
  description: string;
  video: string;
}) => {
  return (
    <div className={`w-full h-28 flex ${selected && 'bg-sky-100'} px-4 py-2 cursor-pointer ${!selected && 'hover:bg-sky-50'} transition-all duration-300`}>
      <AspectRatio ratio={16 / 9} className="w-48 h-24 bg-muted">
      <video>
        <source src={video!} type="video/mp4" />
      </video>
      </AspectRatio>
      <div className="w-full flex flex-col gap-2">
        <h5 className="text-gray-800 ">{title}</h5>
        <p className="text-gray-400 truncate">{description}</p>
      </div>
    </div>
  )
}
