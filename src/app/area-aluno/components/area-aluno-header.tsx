"use client"
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Account } from "@/domains/auth/@types";

export function DashboardHeader({ account }: { account: Account }) {
  return (
    <header className="bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark">
      <div className="p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">
              Olá, {account.name}! 👋
            </h1>
            <p className="text-secondary-light dark:text-secondary-dark mt-2">
              Vamos continuar aprendendo?
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
