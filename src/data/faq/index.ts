export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const getFaqs = async (): Promise<FAQ[]> => {
  // TODO: Obter FAQ do backend
  return [
    {
      id: '1',
      question: 'Quem é o público alvo?',
      answer: 'Este curso é perfeito para pessoas surdas, familiares de surdos, e qualquer pessoa interessada em aprender Libras de forma acessível e divertida.'
    },
    {
      id: '2',
      question: 'Como funciona o método de ensino?',
      answer: 'Utilizamos um sistema gamificado, similar ao Duolingo, onde você aprende de forma progressiva, ganha pontos e conquistas.'
    },
    {
      id: '3',
      question: 'Quanto tempo preciso dedicar por dia?',
      answer: 'Recomendamos 15-20 minutos diários para um aprendizado consistente, mas você pode adaptar conforme sua disponibilidade.'
    }
  ];
};
