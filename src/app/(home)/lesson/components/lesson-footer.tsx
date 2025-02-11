import { Button } from "@/components/ui/button";

interface IProps {
  onContinue(): void;
}

export function LessonFooter({ onContinue }: IProps) {
  return (
    <footer className="fixed bottom-0 w-full p-6 z-20">
      <Button className="w-full h-12" onClick={onContinue}>Continuar</Button>
    </footer>
  )
}