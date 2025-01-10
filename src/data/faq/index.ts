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
      answer: 'O DuoLibras é para todos: pessoas surdas que querem melhorar suas habilidades, ouvintes interessados em aprender Libras, familiares buscando melhor comunicação, e educadores que desejam tornar suas aulas mais inclusivas.'
    },
    {
      id: '2',
      question: 'Como funciona o método de ensino?',
      answer: 'Utilizamos inteligência artificial para reconhecimento de sinais em tempo real, combinada com um sistema gamificado inspirado no Duolingo. Oferecemos trilhas de aprendizado dinâmicas com feedback imediato e aulas em Libras para diferentes disciplinas.'
    },
    {
      id: '3',
      question: 'Quanto tempo preciso dedicar por dia?',
      answer: 'Recomendamos 15-20 minutos diários para um aprendizado consistente, mas você pode adaptar conforme sua disponibilidade.'
    },
    {
      id: '4',
      question: 'O aplicativo é gratuito?',
      answer: 'Oferecemos um modelo freemium: conteúdo básico gratuito para garantir acesso universal ao aprendizado de Libras, e recursos premium através de assinatura para quem deseja uma experiência mais completa.'
    },
    {
      id: '5',
      question: 'Como funciona o reconhecimento de sinais?',
      answer: 'Utilizamos tecnologia de Machine Learning para reconhecer sinais em tempo real através da câmera do seu dispositivo, fornecendo feedback imediato sobre a execução correta dos sinais.'
    },
    {
      id: '6',
      question: 'Vocês oferecem certificado?',
      answer: 'Sim, oferecemos certificados para as trilhas completadas, que podem ser compartilhados em redes profissionais e utilizados para desenvolvimento pessoal.'
    },
    {
      id: '7',
      question: 'Posso usar o DuoLibras em sala de aula?',
      answer: 'Sim! Temos recursos específicos para educadores que desejam incorporar o ensino de Libras em suas aulas, tornando o ambiente educacional mais inclusivo.'
    },
    {
      id: '8',
      question: 'Como surgiu o DuoLibras?',
      answer: 'O DuoLibras nasceu em 2024 na Universidade Federal de Campina Grande, criado por estudantes de Ciência da Computação. O projeto foi selecionado para o Campus Mobile 13ª edição, um dos principais programas de inovação mobile do Brasil.'
    }
  ];
};
