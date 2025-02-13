import { AspectRatio } from "@/components/ui/aspect-ratio";
import { contents } from "@/shared/store/mocks/contents";

interface IProps {
  contentId: string;
}

export function Content({ contentId }: IProps) {
  const content = contents[contentId];

  return (
    <div className="w-full flex flex-col items-center h-screen gap-2">
      <h1 className="text-xl font-medium">{content.name}</h1>
      <div className="w-full">
        <AspectRatio ratio={16/9}>
          <video autoPlay loop playsInline>
            <source src={content.videoUrl} type="video/mp4" />
          </video>
        </AspectRatio>
      </div>

      <div className={`${!content.welcome ? 'border-2 border-cyan-200 rounded-lg hover:border-cyan-300 cursor-pointer transition-all duration-300' : ''} mx-4 px-4 py-2`}>
        <h4 className={`${!content.welcome ? 'text-xl' : 'text-md'} px-2 text-gray-500 text-center tracking-wide`}>{content.description}</h4>
      </div>
    </div>
  )
}
