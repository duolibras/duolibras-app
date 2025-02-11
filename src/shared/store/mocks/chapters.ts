import { Status } from "@/domains/journey/api/@types";
import { lessonsUnit1 } from "./lessons";

export const chaptersUnit1 = [
  {
    id: '1',
    name: 'Vamos aprender?',
    description: 'Descrição do vamos aprender',
    lessons: lessonsUnit1,
    lessonsAccomplished: 2,
    lessonsCount: 5,
    status: Status.AVAILABLE
  },
  {
    id: '2',
    name: 'Como estamos seguindo?',
    description: 'Descrição do vamos aprender',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  },
];