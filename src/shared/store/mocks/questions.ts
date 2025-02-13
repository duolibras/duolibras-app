import { Question, QuestionType } from "@/domains/lesson/api/@types";

export const questions: Record<string, Question> = {
  '4': {
    id: '4',
    name: 'Escolha o sinal correto!',
    description: 'Escolha o sinal correto',
    type: QuestionType.SINGLE_CHOICE,
    answers: [
      {
        id: '1',
        description: 'OI',
      },
      {
        id: '2',
        description: 'BOM DIA',
      },
      {
        id: '3',
        description: 'OLÁ',
      },
      {
        id: '4',
        description: 'BOA NOITE',
      },
    ],
    lessonId: '1',
    videoUrl: 'https://duolibras.s3.us-east-1.amazonaws.com/public/bomdiapergunta.mp4',
    machineLearningModelId: ''
  },
  '3': {
    id: '3',
    name: 'Faça você mesmo!',
    description: 'Tente fazer a letra A',
    type: QuestionType.VIDEO,
    answers: [],
    lessonId: '1',
    videoUrl: '',
    machineLearningModelId: ''
  },
}
