import { ContentCard } from "./content-card"
import { Header } from "../../components/header"
import { BottomTab } from "../../components/bottom-tab"
import { contents } from "@/shared/store/mocks/content"

export const CourseContent = () => {
  return (
    <div className="w-full flex flex-col items-center h-fit max-w-lg mx-auto bg-white py-6 px-6">      
      <Header />
      <br />
      <main className="w-full flex flex-col gap-2 pb-20">
        <div className="flex items-center gap-4 overflow-scroll">
          <span className="px-6 py-1 rounded-xl bg-blue-300 text-white cursor-pointer border-2 border-transparent hover:border-blue-200 transition-all duration-300 ease-in">Tudo</span>
          <span className="px-6 py-1 rounded-xl bg-sky-300 text-white cursor-pointer border-2 border-transparent hover:border-sky-200 transition-all duration-300 ease-in">Educação</span>
          <span className="px-6 py-1 rounded-xl bg-rose-300 text-white cursor-pointer border-2 border-transparent hover:border-rose-200 transition-all duration-300 ease-in">Entretenimento</span>
          <span className="px-6 py-1 rounded-xl bg-purple-300 text-white cursor-pointer border-2 border-transparent hover:border-purple-200 transition-all duration-300 ease-in">Esporte</span>
          <span className="px-6 py-1 rounded-xl bg-teal-300 text-white cursor-pointer border-2 border-transparent hover:border-teal-200 transition-all duration-300 ease-in">Rotina</span>
          <span className="px-6 py-1 rounded-xl bg-orange-300 text-white cursor-pointer border-2 border-transparent hover:border-orange-200 transition-all duration-300 ease-in">Beleza</span>
        </div>
        <section className="w-full py-6 overflow-scroll space-y-2">
          <h3 className="text-xl font-medium text-gray-800">Em destaque</h3>
          <div className="flex items-center gap-4">
            {
              contents.map(content => (
                <ContentCard key={content.id} id={content.id} title={content.title} creator={content.creator} video={content.video}  />
              ))
            }
          </div>
        </section>
        <section className="flex flex-col gap-4">
        {
              [...contents].reverse().map(content => (
                <ContentCard key={content.id} id={content.id} title={content.title} creator={content.creator} video={content.video}  />
              ))
            }
        </section>
      </main>
      <BottomTab />
    </div>
  )
}
