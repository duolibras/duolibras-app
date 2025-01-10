export interface Testimonial {
  id: number;
  name: string;
  text: string;
  time: string;
}

export interface TestimonialData {
  items: Testimonial[];
  totalCount: number;
}

export const getTestimonials = async (): Promise<TestimonialData> => {
  return {
    items: [
      {
        id: 1,
        name: 'Maria Silva',
        text: 'O DuoLibras transformou minha comunicação com minha filha surda. A metodologia é incrível!',
        time: '3 horas atrás'
      },
      {
        id: 2,
        name: 'João Santos',
        text: 'Estou aprendendo Libras de forma divertida e eficiente. Os exercícios gamificados fazem toda diferença.',
        time: '6 horas atrás'
      }
    ],
    totalCount: 107
  };
};
