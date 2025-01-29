import { LessonService } from './lesson-service';
import { useQuery } from '@tanstack/react-query';

export const createLessonController = (lessonService: LessonService) => {
  const useModulesByLessonId = (lessonId: string) => {
    return useQuery({
      queryKey: ['lesson', lessonId, 'modules'],
      queryFn: () => lessonService.getModulesByLessonId(lessonId),
    });
  };

  const useContentById = (contentId: string) => {
    return useQuery({
      queryKey: ['content', contentId],
      queryFn: () => lessonService.getContentById(contentId),
      enabled: !!contentId, 
    });
  };

  const useQuestionById = (questionId: string) => {
    return useQuery({
      queryKey: ['question', questionId],
      queryFn: () => lessonService.getQuestionById(questionId),
      enabled: !!questionId,
    });
  };

  return {
    useModulesByLessonId,
    useContentById,
    useQuestionById,
  };
};
