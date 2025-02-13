import { InteractButton } from "@/components/ui/interactive-button";

interface IProps {
  onContinue(): void;
}

export function LessonFooter({ onContinue }: IProps) {
  return (
    <footer className="fixed bottom-0 w-full p-6 z-20">
      <InteractButton onClick={onContinue}>
        Continuar
      </InteractButton>
    </footer>
  )
}