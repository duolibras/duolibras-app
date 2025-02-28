"use client"

import React from 'react';

import { Assets } from '@/shared/images';
import { all_button_primary_style } from '../../componets/style';
import { OptionSelector } from '@/components/ui/option-selector';

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
        <button
          onClick={onNextPage}
          disabled={!selectedOption}
          className={`${all_button_primary_style} ${!selectedOption && 'bg-gradient-to-r from-gray-300 to-gray-300 hover:from-gray-300 hover:to-gray-300'}`}
        >
          CONTINUAR
        </button>
      </footer>
    </>
  )
}
