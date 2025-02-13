import { Content } from "@/domains/lesson/api/@types";

export const contents: Record<string, Content> = {
  '1': { 
    id: '1',
    name: 'Vamos começar a aprender libras!',
    description: 'Você está pronto para iniciar sua jornada na linguagem de sinais brasileira? Apertem os cintos, estamos prontos para decolar!',
    welcome: true,
    lessonId: '1',
    videoUrl: 'https://duolibras.s3.us-east-1.amazonaws.com/public/prazeremconhecervc.mp4'
   },
  '2': {
    id: '2',
    name: 'Aprenda um novo sinal!',
    description: 'OI',
    lessonId: '1',
    videoUrl: 'https://duolibras.s3.us-east-1.amazonaws.com/public/oi.mp4'
  },
  '3': {
    id: '2',
    name: 'Aprenda um novo sinal!',
    description: 'BOM DIA',
    lessonId: '1',
    videoUrl: 'https://duolibras.s3.us-east-1.amazonaws.com/public/bomdia.mp4'
  },
  '4': {
    id: '4',
    name: 'Aprenda um novo sinal!',
    description: 'É assim que se faz a letra B',
    lessonId: '1',
    videoUrl: ''
  },
}
