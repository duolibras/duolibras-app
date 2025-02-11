import { Unit as IUnit } from "@/domains/journey/api/@types";
import { Chapter } from "./chapter";

interface IProps {
  unit: IUnit;
  index: number;
}

export function Unit({ unit, index }: IProps) {

  return (
    <div>
      <div className="bg-cyan-500 px-6 py-10">
        <h2 className="text-white text-3xl font-bold">{unit.name}</h2>
        <span className="text-white text-lg">Unidade {index}</span>
      </div>
      <div className="px-6 py-4 space-y-4">
        {unit.chapters.map((chapter, index) => (
          <Chapter 
            key={String(Math.random())}
            chapter={chapter}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}