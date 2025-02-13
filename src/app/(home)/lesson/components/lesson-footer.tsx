import { InteractButton } from "@/components/ui/interactive-button";

interface IProps {
  selected: boolean;
  onContinue(): void;
}

export function LessonFooter({ selected, onContinue }: IProps) {
  return (
    <footer className="fixed bottom-0 w-full p-6 z-20">
      <InteractButton onClick={onContinue} disabled={!selected}>
        Continuar
      </InteractButton>
    </footer>
  )
}
