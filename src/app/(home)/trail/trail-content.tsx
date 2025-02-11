import { Status } from "@/domains/journey/api/@types";
import { Unit } from "./components/unit";

export function TrailContent() {
  return (
    <div>
      <h1>Trail Content</h1>
      <div className="flex flex-col w-full gap-6">
        <Unit  
          unit={{
            id: '1',
            name: 'Introdução a libras',
            chapters: [
              {
                id: '1',
                name: 'Vamos aprender?',
                description: 'Descrição do vamos aprender',
                lessons: [],
                lessonsAccomplished: 2,
                lessonsCount: 5,
                status: Status.AVAILABLE
              },
              {
                id: '2',
                name: 'Como estamos seguindo?',
                description: 'Descrição do vamos aprender',
                lessons: [],
                lessonsAccomplished: 0,
                lessonsCount: 5,
                status: Status.UNAVAILABLE
              },
            ],
            chaptersCount: 5,
            chaptersAccomplished: 3,
            status: Status.AVAILABLE,
          }}
          index={1}
        />
        {/* <Unit 
          unit={{
            id: '2',
            name: 'Continuando o aprendizado',
            chapters: [],
            chaptersCount: 5,
            chaptersAccomplished: 1,
            status: Status.AVAILABLE,
          }}
          index={2}
        /> */}
      </div>
    </div>
  )
}