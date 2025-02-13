import { Status } from "@/domains/journey/api/@types";
import { lessonsUnit1 } from "./lessons";

export const chaptersUnit1 = [
  {
    id: '1',
    name: 'Fundamentos essenciais',
    description: 'Saudações e Cumprimentos',
    lessons: lessonsUnit1,
    lessonsAccomplished: 0,
    lessonsCount: 4,
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

export const chaptersUnit2 = [
  {
    id: '1',
    name: 'Números Avançados',
    description: 'Aprenda números maiores, ordinais e quantidades',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  },
  {
    id: '2',
    name: 'Tempo e Calendário',
    description: 'Dias da semana, meses do ano e marcadores temporais',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  },
  {
    id: '3',
    name: 'Verbos Essenciais',
    description: 'Principais verbos para comunicação cotidiana',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  },
  {
    id: '4',
    name: 'Substantivos Básicos',
    description: 'Objetos, lugares e elementos do dia a dia',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  },
  {
    id: '5',
    name: 'Documentos e Formulários',
    description: 'Vocabulário relacionado a documentações e identificação',
    lessons: [],
    lessonsAccomplished: 0,
    lessonsCount: 5,
    status: Status.UNAVAILABLE
  }
]
