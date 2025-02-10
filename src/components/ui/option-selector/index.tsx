"use client"

import Image from "next/image";

export const OptionSelector = ({
  title,
  subtitle,
  options,
  selectedOption,
  setSelectedOption,
}: {
  title: string,
  subtitle: string,
  options: { id: string, label: string, img?: string }[],
  selectedOption: string | null,
  setSelectedOption: (option: string) => void
}) => {
  return (
    <div className="w-full max-w-lg p-6">
      <div className="w-80 mx-auto">
        <h1 className="text-2xl text-center font-bold text-gray-800">{title}</h1>
        <p className="text-center text-gray-600 mt-2">{subtitle}</p>
      </div>
      
      <div className="mt-8">
        {options.map((option, index) => (
          <div
            key={option.id}
            className={`
              w-96 mx-auto max-w-sm flex items-center gap-4 p-4 cursor-pointer
              border-2 border-gray-100 
              ${index !== options.length - 1 ? 'border-b-0' : ''}
              ${selectedOption === option.id ? 'outline outline-2 outline-cyan-500 bg-cyan-100 border-0 relative z-10' : ''}
            `}
            onClick={() => setSelectedOption(option.id)}
            role="radio"
            aria-checked={selectedOption === option.id}
          >
            { !!option?.img && <Image src={option.img} width={32} height={32} alt="" className="w-8 h-8" /> }
            <span className="text-gray-600">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
