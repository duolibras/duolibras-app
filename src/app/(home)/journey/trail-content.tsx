import { units } from "@/shared/store/mocks/units";
import { Unit } from "./components/unit";

export function TrailContent() {
  return (
    <div className="mt-12">
      <div className="flex flex-col w-full gap-6">
        {units.map((unit, index) => (
          <Unit  
            key={unit.id}
            unit={unit}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  )
}
