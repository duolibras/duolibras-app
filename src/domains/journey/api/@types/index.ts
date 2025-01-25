export enum Status { 
  'AVAILABLE',
  'UNAVAILABLE',
  'ACCOMPLISHED',
}

export type Lesson = {
  id: string;
  name: string;
  modulesCount: number;
  chapterId: string;
  status: Status;
}

export type Chapter = {
  id: string;
  name: string;
  description: string;
  lessonsCount: number;
  status: Status;
  lessons: Lesson[];
}

export type Unit = {
  id: string;
  name: string;
  chaptersCount: number;
  status: Status;
  chapters: Chapter[];
}

export type Journey = {
  units: Unit[];
}

export type JourneyResponse = {
  journey: Journey;
}
