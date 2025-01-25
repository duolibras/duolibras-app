"use client"

import { useTheme } from "@/hooks/use-theme"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted-light dark:hover:bg-muted-dark"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-text-light" />
      ) : (
        <Sun className="w-5 h-5 text-text-dark" />
      )}
    </button>
  )
}
