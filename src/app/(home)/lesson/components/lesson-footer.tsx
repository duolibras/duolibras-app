import { Button } from "@/components/ui/button";

interface IProps {
  selected: boolean;
  onContinue(): void;
}

export function LessonFooter({ selected, onContinue }: IProps) {
  return (
    <footer className="fixed bottom-0 w-full p-6 z-20">
      <Button className="w-full h-12" onClick={onContinue} disabled={!selected}>Continuar</Button>
    </footer>
  )
}
