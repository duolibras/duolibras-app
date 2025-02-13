"use client"

import React from 'react';

import { InteractButton } from '@/components/ui/interactive-button';
import { OptionSelector } from '@/components/ui/option-selector';

export const HearingLevelContent = ({
  onNextPage
}: {
  onNextPage: () => void
}) => {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const options = [
    { 
      id: 'mild', 
      label: 'Leve',
      description: 'Percebo sons, mas às vezes tenho dificuldade em ambientes barulhentos'
    },
    { 
      id: 'moderate', 
      label: 'Moderada',
      description: 'Preciso de um pouco mais de atenção para acompanhar conversas'
    },
    { 
      id: 'severe', 
      label: 'Severa',
      description: 'Tenho dificuldade significativa para ouvir no dia a dia'
    },
    { 
      id: 'profound', 
      label: 'Profunda',
      description: 'Comunico-me principalmente através de língua de sinais'
    },
    { 
      id: 'none', 
      label: 'Não sou surdo',
      description: 'Não tenho perda auditiva'
    },
  ];

  return (
    <>
      <main className="flex flex-col items-start gap-6 animate-[fadeIn_1s_ease-in_0.3s] opacity-0 [animation-fill-mode:forwards]">
        <OptionSelector 
          title="Como é a sua surdez?" 
          subtitle="Queremos entender melhor sua forma de comunicação para tornar sua experiência mais confortável" 
          options={options} 
          selectedOption={selectedOption} 
          setSelectedOption={setSelectedOption} 
        />
      </main>

      <footer className="w-full flex flex-col px-4 gap-4">
        <InteractButton 
          onClick={onNextPage}
          disabled={!selectedOption} 
        >
          CONTINUAR
        </InteractButton>
      </footer>
    </>
  )
}
