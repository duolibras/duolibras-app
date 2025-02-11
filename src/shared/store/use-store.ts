import { Chapter } from '@/domains/journey/api/@types';
import { Module } from '@/domains/lesson/api/@types';
import { create } from 'zustand';

interface IStore {
  chapter: Chapter | null;
  setChapter(chapter: Chapter): void;

  modules: Module[];
  setModules(modules: Module[]): void;
}

export const useStore = create<IStore>((set) => ({
  chapter: null,
  setChapter: (chapter: Chapter) => set((state) => ({
    ...state,
    chapter,
  })),

  modules: [],
  setModules: (modules: Module[]) => set((state) => ({
    ...state,
    modules,
  }))
}))