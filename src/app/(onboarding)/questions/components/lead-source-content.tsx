"use client"

import React from 'react';

import { InteractButton } from '@/components/ui/interactive-button';
import { OptionSelector } from '@/components/ui/option-selector';
import { Assets } from '@/shared/images';

export const LeadSourceContent = ({ onNextPage }: { onNextPage: () => void }) => {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const options = [
    {
      id: 'amigos',
      label: 'Amigos/família',
      img: Assets.SVG.Friends,
    },
    {
      id: 'universidade',
      label: 'Universidade',
      img: Assets.SVG.University,
    },
    {
      id: 'social',
      label: 'Facebook/Instagram',
      img: Assets.SVG.SocialMedia,
    },
    {
      id: 'outro',
      label: 'Outro',
      img: Assets.SVG.Other,
    }
  ]

  return (
    <>
      <main className="flex flex-col items-start gap-6 animate-[fadeIn_1s_ease-in_0.3s] opacity-0 [animation-fill-mode:forwards]">
        <OptionSelector
          title="Por onde você nos conheceu?"
          subtitle="Escolha uma opção abaixo"
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
