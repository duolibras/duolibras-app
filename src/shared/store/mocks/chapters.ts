import { Status } from "@/domains/journey/api/@types";
import { lessonsUnit1 } from "./lessons";

export const chaptersUnit1 = [
  {
    id: '1',
    name: 'Fundamentos essenciais',
    description: 'Saudações e Cumprimentos',
    lessons: lessonsUnit1,
    lessonsAccomplished: 2,
    lessonsCount: 5,
    status: Status.AVAILABLE
  },
  {
    id: '2',
    name: 'Alfabeto',
    description: 'Pratique a datilologia para soletrar palavras.',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  },
  {
    id: '2',
    name: 'Pronomes e Pessoas',
    description: 'Estude os pronomes pessoais e sua aplicação.',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  },
  {
    id: '3',
    name: 'Cores',
    description: 'Explore os sinais das cores principais e suas variações',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  },
  {
    id: '4',
    name: 'Verbos',
    description: 'Domine os verbos mais utilizados no dia a dia.',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  },
];
