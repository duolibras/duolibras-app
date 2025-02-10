import { Module, Content, Question } from './api/@types';
import { LessonApi } from './api/lesson-api';

export class LessonService {
  private lessonApi: LessonApi;
  constructor() {
    this.lessonApi = new LessonApi();
  }

  async getModulesByLessonId(lessonId: string): Promise<Module[]> {
    const response = await this.lessonApi.getModulesByLessonId(lessonId);
    if (response.error) {
      throw response.error;
    }
    
    return response.data?.modules || [];
  }

  async getContentById(contentId: string): Promise<Content> {
    const response = await this.lessonApi.getContentById(contentId)
    if (!response.data?.content) {
      throw new Error('Conteúdo não encontrado');
    }
    return response.data.content;
  }

  async getQuestionById(questionId: string): Promise<Question> {
    const response = await this.lessonApi.getQuestionById(questionId);
    if (!response.data?.question) {
      throw new Error('Questão não encontrada');
    }
    return response.data.question;
  }
}
