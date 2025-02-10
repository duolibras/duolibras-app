import { ApiClient } from '@/shared/api';
import { Content, Module, Question } from './@types';
import { httpClient } from '@/shared/api/axios';

export class LessonApi extends ApiClient {
  constructor() {
    super(httpClient, process.env.NEXT_PUBLIC_API_URL); 
  }

  async getModulesByLessonId(lessonId: string) {
    return this.get<{ modules: Module[] }>(`/modules/lesson/${lessonId}`);
  }

  async getContentById(contentId: string) {
    return this.get<{ content: Content }>(`/contents/${contentId}`);
  }

  async getQuestionById(questionId: string) {
    return this.get<{ question: Question }>(`/questions/${questionId}`);
  }
}
