"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, Search } from "lucide-react"

export const Header = ({
  onHandleSidebarMenu
}: {
  onHandleSidebarMenu: (value: boolean) => void;
}) => {
  return (
    <header className="bg-white dark:bg-muted-dark border-b border-border-light dark:border-border-dark p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Button variant="primary" onClick={() => onHandleSidebarMenu(true)} className="mr-4">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-text-light dark:text-text-dark">
            Meus Cursos
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 bottom-1 transform -translate-y-1/2 h-4 w-4 text-secondary-light dark:text-secondary-dark" />
            <Input
              label=""
              placeholder="Buscar cursos..."
              className="pl-10  py-2 w-64 rounded-sm text-gray-600"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-text-light dark:text-text-dark">Professor João Silva</span>
            <div className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center text-white">
              JS
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
