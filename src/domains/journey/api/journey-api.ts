import { ApiClient } from '@/shared/api'
import { JourneyResponse } from './@types'
import { httpClient } from '@/shared/api/axios';

export class JourneyApi extends ApiClient {
  constructor() {
    super(httpClient, process.env.NEXT_PUBLIC_API_URL); 
  }

  async myJourney() {
    return this.get<JourneyResponse>('/journeys/me')
  }
  
  async answerQuestionJourney(questionId: string, answerId: string) {
    return this.post<void>(`/journeys/questions/${questionId}/answers/${answerId}`)
  }

  async completeJourneyLesson(lessonId: string) {
    return this.post<void>(`/journeys/lessons/${lessonId}/complete`)
  }
}
