import Image from "next/image";
import { FrameMotionLateral } from "../(onboarding)/componets/frame-motion-lateral";
import { OnboardingHeader } from "../(onboarding)/componets/onboarding-header";
import { Assets } from "@/shared/images";

export default function ChoosePathScreen() {
  return (
    <FrameMotionLateral>
      <div className="w-full flex flex-col items-center justify-between h-fit max-w-lg mx-auto bg-white py-6">
        <OnboardingHeader />

        <main>
          <h2 className="w-80 text-center text-gray-700 text-2xl font-bold my-6">Escolha seu caminho</h2>
          <section className="flex flex-col gap-4">
            <div className="flex flex-col items-center  justify-center p-8 border-2 border-gray-200 rounded-xl space-y-2 hover:border-cyan-500 cursor-pointer transition-all duration-400 ease-in hover:scale-101">
              <Image src={Assets.SVG.Dolphin} width={140} height={140} alt="Ilustração de um golfinho bebê azul chamado Dolphin, com expressão alegre e amigável, pulando animadamente com suas barbatanas abertas. Tem uma barriga branca e olhos grandes e expressivos." />
              <h4 className="text-gray-700 text-xl font-bold">Aprender libras</h4>
              <p className="text-gray-400 text-sm">Trilha de aprendizado gamificada</p>
            </div>
            <div className="flex flex-col items-center  justify-center p-6 px-2 border-2 border-gray-200 rounded-xl space-y-2 hover:border-octor-400 cursor-pointer transition-all duration-400 ease-in hover:scale-101">
              <Image src={Assets.PNG.Octor} width={140} height={140} alt="Ilustração de um polvo rosa bebê chamado Octor, usando óculos de armação preta. Tem uma expressão alegre e intelectual, com seus tentáculos ondulando de forma simpática. Seus olhos grandes por trás dos óculos dão um ar carismático ao personagem." />
              <h4 className="text-gray-700 text-xl font-bold">Reforçar conhecimento</h4>
              <p className="w-72 text-gray-400 text-sm text-center">Uma gama de cursos e conteúdos exclusivos</p>
            </div>
            <p className="w-72 text-center text-gray-400 text-sm">Não se preocupe, você pode alternar quando quiser.</p>
          </section>
        </main>
      </div>
    </FrameMotionLateral>
  )
}
