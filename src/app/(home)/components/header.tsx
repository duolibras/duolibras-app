import { Input } from "@/components/ui/input"
import { Menu, Search } from "lucide-react"

export const Header = () => {
  return (
    <header className="w-full flex justify-start items-center gap-4">
        <div className="flex items-center gap-4">
        <Menu className="text-gray-300 hover:text-sky-500 cursor-pointer transition-all duration-400 ease-in-out"/>
        <p className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">DuoLibras</p>
        </div>
        <div className="w-full py-4 px-2 bg-gray-50 rounded-lg relative">
          <Search size={16} className="text-gray-400 absolute top-3" />
          <Input label="" aria-placeholder="Pesquise por " className="absolute left-8 top-2 bg-gray-50 text-gray-600"/>
        </div>
        <div className="w-16 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-medium">
          J.V
        </div>
      </header>
  )
}
