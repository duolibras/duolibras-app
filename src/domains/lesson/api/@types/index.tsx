export enum ModuleType {
  CONTENT = 'CONTENT',
  QUESTION = 'QUESTION',
}

export interface Module {
  id: string;
  type: ModuleType;
  contentId?: string; // Presente se o tipo for CONTENT
  questionId?: string; // Presente se o tipo for QUESTION
}

export interface Content {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
  lessonId: string;
}

export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  VIDEO = 'VIDEO',
}

export interface Answer {
  id: string;
  description: string;
}

export interface Question {
  id: string;
  name: string;
  description: string;
  videoUrl: string | null;
  type: QuestionType;
  lessonId: string;
  answers: Answer[];
  machineLearningModelId: string | null; // Para questões que usam ML
}
