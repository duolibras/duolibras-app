import { Progress } from "@/components/ui/progress";
import { Hearts, Menu } from "../../components/journey-header";

interface IProps {
  step: number;
  totalSteps: number;
}

export function LessonHeader({ step, totalSteps }: IProps) {
  return (
    <div>
      <header className="p-6 flex justify-between items-center gap-6">
        <Menu />

        <Progress value={(step + 1) * 100 / totalSteps} />

        <Hearts />
      </header>
    </div>
  );
}