import { Content, Module, Question } from "@/domains/lesson/api/@types";
import { VideoPlayer, VideoRecorder } from "./video-player";
import { QuestionAnswers } from "./question-answer";
import { NavigationFooter } from "./navigation-footer";

interface LessonContentProps {
  moduleDetails: Content | Question; 
  currentModule: Module | undefined; 
  onModuleComplete: () => void;
  selectedAnswerId: string | null;
  onAnswerSelect: (answerId: string) => void;
  recordedVideo: string | null;
  onOpenCamera: () => void;
  onNavigate: (direction: 'next' | 'previous') => void;
  isLastModule: boolean;
}

export function LessonContent({
  moduleDetails,
  currentModule,
  onModuleComplete,
  selectedAnswerId,
  onAnswerSelect,
  recordedVideo,
  onOpenCamera,
  onNavigate,
  isLastModule,
}: LessonContentProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto mt-8">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          {moduleDetails.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {moduleDetails.description}
        </p>

        {(moduleDetails as Question)?.type !== 'VIDEO' && moduleDetails.videoUrl && (
          <VideoPlayer videoUrl={moduleDetails.videoUrl} onComplete={onModuleComplete} />
        )}

        {currentModule?.type === 'QUESTION' && (moduleDetails as Question)?.type === 'VIDEO' && (
          <VideoRecorder recordedVideo={recordedVideo} onOpenCamera={onOpenCamera} />
        )}

        {currentModule?.type === 'QUESTION' && (moduleDetails as Question).answers && (
          <QuestionAnswers
            answers={(moduleDetails as Question).answers}
            selectedAnswerId={selectedAnswerId}
            onAnswerSelect={(answerId) => {
              onAnswerSelect(answerId);
              onModuleComplete();
            }}
          />
        )}
      </div>

      <NavigationFooter onContinue={() => onNavigate('next')} isLastModule={isLastModule} />
    </div>
  );
}
