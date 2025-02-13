import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { QuestionType } from "@/domains/lesson/api/@types";
import { questions } from "@/shared/store/mocks/questions";
import { Camera } from "lucide-react";


interface IProps {
  questionId: string;
}

export function Question({ questionId }: IProps) {
  const question = questions[questionId];
  
  return (
    <div className="w-full flex flex-col items-center h-full gap-2">
      <h1 className="text-xl font-medium">{question.name}</h1>
      {question.type === QuestionType.SINGLE_CHOICE && (
        <div className="w-full">
          <AspectRatio ratio={16/9}>
            <div className="w-full h-full bg-cyan-100"></div>
          </AspectRatio>
        </div>
      )}

      {question.type === QuestionType.VIDEO && (
        <div className="w-full px-10 h-full">
          <div className="rounded-xl border-2 border-cyan-500 border-dashed w-full h-96 flex justify-center items-center">
            <Camera />
          </div>
        </div>
      )}
      <p className="text-gray-600 mb-10">{question.description}</p>

      <div className="w-full flex flex-col gap-4 px-10">
        {question.answers.map((answer) => (
          <Button 
            key={answer.id}
            variant="outline" 
            className="py-6 border-cyan-500 rounded-3xl text-lg font-medium"
          >
            {answer.description}
          </Button>
        ))}
      </div>
    </div>
  )
}