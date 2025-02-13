"use client"

import React from 'react';

import { InteractButton } from '@/components/ui/interactive-button';
import { OptionSelector } from '@/components/ui/option-selector';

export const HearingHistoryContent = ({
  onNextPage
}: {
  onNextPage: () => void
}) => {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const options = [
    { 
      id: 'born', 
      label: 'Nascença',
      description: 'Percebo sons, mas às vezes tenho dificuldade em ambientes barulhentos'
    },
    { 
      id: 'adquired', 
      label: 'Adquirida',
      description: 'Preciso de um pouco mais de atenção para acompanhar conversas'
    },
  ];

  return (
    <>
      <main className="flex flex-col items-start gap-6 animate-[fadeIn_1s_ease-in_0.3s] opacity-0 [animation-fill-mode:forwards]">
        <OptionSelector 
          title="Como é a sua surdez?" 
          subtitle="Entender sua história nos ajuda a melhorar sua experiência" 
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
