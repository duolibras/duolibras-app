"use client"

import React from 'react';
import { LogOut, Home, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Sidebar = ({
  isSidebarOpen,
  onHandle
}: {
  isSidebarOpen: boolean;
  onHandle: (value: boolean) => void;
}) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white dark:bg-muted-dark transition-transform duration-200 ease-in-out z-30`}>
        <div className="p-4">
          <Button variant="primary" className="mb-8 w-full justify-start" onClick={() => onHandle(false)}>
            <X className="h-6 w-6" />
          </Button>
          <nav className="space-y-4">
            <Button variant="primary" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Início
            </Button>
            <Button variant="primary" className="w-full justify-start mt-auto text-red-500 hover:text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </nav>
        </div>
      </div>
  )
}
