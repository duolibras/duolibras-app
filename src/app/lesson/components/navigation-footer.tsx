interface NavigationFooterProps {
  onContinue: () => void;
  isLastModule?: boolean;
}

export function NavigationFooter({ onContinue, isLastModule }: NavigationFooterProps) {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800/50">
      <button
        onClick={onContinue}
        disabled={isLastModule}
        className="flex items-center gap-2 px-4 py-2 rounded-lg
                 bg-cyan-500 text-white
                 hover:bg-cyan-600
                 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-colors duration-200 shadow-sm mx-auto"
      >
        Continuar
      </button>
    </div>
  );
}
