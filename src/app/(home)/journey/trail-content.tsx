import { units } from "@/shared/store/mocks/units";
import { Unit } from "./components/unit";

export function TrailContent() {
  return (
    <div className="mt-12 mb-40 -z-10">
      <div className="flex flex-col w-full gap-6">
        {units.map((unit) => (
          <Unit  
            key={unit.id}
            unit={unit}
            index={1}
          />
        ))}
      </div>
    </div>
  )
}