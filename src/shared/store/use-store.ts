import { Chapter, Status } from '@/domains/journey/api/@types';
import { create } from 'zustand';

interface IStore {
  chapter: Chapter | null;

  setChapter(chapter: Chapter): void;
}

export const useStore = create<IStore>((set) => ({
  chapter:  {
    id: '1',
    name: 'Vamos aprender?',
    description: 'Descrição do vamos aprender',
    lessons: [
      {
        id: '1',
        chapterId: '1',
        name: 'Descubra pipipi',
        modulesCount: 5,
        status: Status.AVAILABLE
      },
      {
        id: '2',
        chapterId: '2',
        name: 'Descubra pipipi',
        modulesCount: 5,
        status: Status.UNAVAILABLE
      },
      {
        id: '3',
        chapterId: '2',
        name: 'Descubra pipipi',
        modulesCount: 5,
        status: Status.UNAVAILABLE
      },
      {
        id: '4',
        chapterId: '2',
        name: 'Descubra pipipi',
        modulesCount: 5,
        status: Status.UNAVAILABLE
      },
      {
        id: '5',
        chapterId: '2',
        name: 'Descubra pipipi',
        modulesCount: 5,
        status: Status.UNAVAILABLE
      },
      
    ],
    lessonsAccomplished: 2,
    lessonsCount: 5,
    status: Status.AVAILABLE
  },
  setChapter: (chapter: Chapter) => set((state) => ({
    ...state,
    chapter,
  })),
}))