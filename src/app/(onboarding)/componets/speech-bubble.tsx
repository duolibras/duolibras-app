import React, { ReactNode } from 'react';

export const SpeechBubble = ({
  children,
  bubblePosition,
  className = '',
}: {
  children: ReactNode,
  bubblePosition?: 'left' | 'right' | 'top' | 'bottom',
  className?: string
}) => {
  return (
    <div className="relative w-fit p-8">
      <div className={`relative bg-white rounded-3xl border-gray-200 border-2 p-6 ${className}`}>
        <p className="text-xl text-gray-800 relative z-10">
          { children }
        </p>

        {
          (() => {
            switch (bubblePosition) {
              case 'right':
                return (
                  <div className="absolute w-4 h-4 bg-white transform rotate-45 -right-[1.5] top-1/2 translate-x-2 -translate-y-2 border-t-2 border-r-2 border-gray-200" />
                )
              case 'left':
                return (
                  <div className="absolute w-4 h-4 bg-white transform -rotate-45 -left-[1.5] top-1/2 -translate-x-2 -translate-y-2 border-l-2 border-t-2 border-gray-200"  />
                )
              case 'top':
                return (
                  <div className="absolute w-4 h-4 bg-white transform -rotate-45 left-8 -top-[17] -translate-x-2 translate-y-2 border-r-2 border-t-2 border-gray-200" />
                )
              case 'bottom':
                return (
                  <div className="absolute w-4 h-4 bg-white transform rotate-45 left-8 -bottom-[17] translate-x-2 -translate-y-2 border-r-2 border-t-2 border-gray-200" />
                )
              default:
                return (
                  <div className="absolute w-4 h-4 bg-white transform rotate-45 -right-[1.5] top-1/2 translate-x-2 -translate-y-2 border-t-2 border-r-2 border-gray-200" />
                )
            }
          })()
        }
      </div>
    </div>
  );
};

export default SpeechBubble;
