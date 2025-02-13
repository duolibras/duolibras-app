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
  '5': {
    id: '5',
    name: 'Aprenda um novo sinal!',
    description: 'C',
    lessonId: '1',
    videoUrl: 'https://duolibras.s3.us-east-1.amazonaws.com/public/c.mp4'
  },
  '6': {
    id: '6',
    name: 'Aprenda um novo sinal!',
    description: 'D',
    lessonId: '1',
    videoUrl: 'https://duolibras.s3.us-east-1.amazonaws.com/public/d.mp4'
  },
}
