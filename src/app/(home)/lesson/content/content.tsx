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
          <div className="w-full h-full bg-cyan-100"></div>
        </AspectRatio>
      </div>

      <h1>{content.description}</h1>
    </div>
  )
}