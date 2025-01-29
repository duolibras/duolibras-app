"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { LessonService } from '@/domains/lesson/lesson-service';
import { ErrorContent } from '../components/error-content';
import LoadingContent from '@/app/waiting/components/loading-content';
import { LessonHeader } from '../components/header-lesson';
import CameraModal from '../components/modal-camera';
import { LessonContent } from '../components/lesson-content';

export default function LessonPage() {
  const { lessonId } = useParams(); 
  const [currentModuleIndex, setCurrentModuleIndex] = React.useState(0);
  const [completedModules, setCompletedModules] = React.useState<number[]>([]);
  const [isCameraOpen, setIsCameraOpen] = React.useState(false);
  const [recordedVideo, setRecordedVideo] = React.useState<string | null>(null);
  const [selectedAnswerId, setSelectedAnswerId] = React.useState<string | null>(null);

  const { data: modules, isLoading: isModulesLoading, error: modulesError } = useQuery({
    queryKey: ['lesson', lessonId, 'modules'],
    queryFn: () => new LessonService().getModulesByLessonId(lessonId as string),
  });

  const currentModule = modules?.[currentModuleIndex];

  const { data: moduleDetails, isLoading: isDetailsLoading, error: detailsError } = useQuery({
    queryKey: ['module', currentModule?.id, currentModuleIndex],
    queryFn: async () => {
      if (!currentModule) return null;

      if (currentModule.type === 'CONTENT') {
        return new LessonService().getContentById(currentModule.contentId!);
      } else if (currentModule.type === 'QUESTION') {
        return new LessonService().getQuestionById(currentModule.questionId!);
      }

      return null;
    },
    enabled: !!currentModule, 
  });

  if (isModulesLoading || isDetailsLoading) {
    return (
      <LoadingContent />
    );
  }


  if (modulesError || detailsError) {
    return (
      <ErrorContent />
    );
  }

  const handleModuleComplete = () => {
    if (!completedModules.includes(currentModuleIndex)) {
      setCompletedModules([...completedModules, currentModuleIndex]);
    }
  };

  const handleNavigation = (direction: 'next' | 'previous') => {
    handleModuleComplete();
    setCurrentModuleIndex(prev =>
      direction === 'next' ? Math.min(prev + 1, (modules?.length || 1) - 1) : Math.max(prev - 1, 0)
    );
    setRecordedVideo(null);
  };

  const progress = modules ? (completedModules.length / modules.length) * 100 : 0;
  const handleRecordComplete = (videoUrl: string) => {
    setRecordedVideo(videoUrl);
    handleModuleComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <LessonHeader progress={progress} currentModuleIndex={currentModuleIndex} modules={modules!} />

      {moduleDetails && (
        <LessonContent
          moduleDetails={moduleDetails}
          currentModule={currentModule}
          onModuleComplete={handleModuleComplete}
          selectedAnswerId={selectedAnswerId}
          onAnswerSelect={setSelectedAnswerId}
          recordedVideo={recordedVideo}
          onOpenCamera={() => setIsCameraOpen(true)}
          onNavigate={handleNavigation}
          isLastModule={modules ? currentModuleIndex === modules.length - 1 : false}
        />
      )}

      <CameraModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onRecord={handleRecordComplete}
      />
    </div>
  );
}
