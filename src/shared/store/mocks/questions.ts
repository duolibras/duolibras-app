import { Question, QuestionType } from "@/domains/lesson/api/@types";

export const questions: Record<string, Question> = {
  '2': {
    id: '2',
    name: 'Escolha o sinal correto!',
    description: 'Escolha o sinal correto',
    type: QuestionType.SINGLE_CHOICE,
    answers: [
      {
        id: '1',
        description: 'Letra A',
      },
      {
        id: '2',
        description: 'Bom dia',
      },
      {
        id: '3',
        description: 'Letra B',
      },
      {
        id: '4',
        description: 'Boa noite',
      },
    ],
    lessonId: '1',
    videoUrl: '',
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