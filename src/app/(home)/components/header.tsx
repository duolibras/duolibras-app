"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LogOut, Menu } from "lucide-react"
import { useRouter } from "next/navigation"

export const Header = () => {
  const navigation = useRouter();

  return (
    <header className="w-full flex justify-start items-center gap-4">
        <div className="flex items-center gap-4">
        <Sheet>
        <SheetTrigger>
            <Menu className="text-gray-300 hover:text-sky-500 cursor-pointer transition-all duration-400 ease-in-out"/>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <br />
            <SheetTitle className="text-2xl text-gray-700">Faça parte do futuro da educação</SheetTitle>
            {/* <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription> */}
          </SheetHeader>

          <div className="w-full fixed bottom-4">
            <Button className="w-full flex justify-center items-center gap-4 bg-transparent border-2 border-gray-300 text-gray-800 hover:border-sky-300 hover:bg-transparent transition-all duration-400">
              <LogOut />
              Sair
            </Button>
          </div>
        </SheetContent>
        </Sheet>
        <button className="cursor-pointer" onClick={() => {
          navigation.push("/exclusive-content")
        }}>
          <p className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">DuoLibras</p>
        </button>
        </div>
        {/* <div className="w-full py-4 px-2 bg-gray-50 rounded-lg relative">
          <Search size={16} className="text-gray-400 absolute top-3" />
          <Input label="" aria-placeholder="Pesquise por " className="absolute left-8 top-2 bg-gray-50 text-gray-600"/>
        </div> */}
        {/* <div className="w-16 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-medium">
          J.V
        </div> */}
      </header>
  )
}
