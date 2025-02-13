"use client"

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";
interface IProps extends ButtonProps {
  variant?: 'default' | 'secondary' | 'outline';
}

export function InteractButton({ children, className, variant = 'default', ...props }: IProps) {
  return (
    <div 
      className={cn(
        "border-b-4 border-solid border-cyan-600 rounded-xl",
        variant === 'secondary' && 'border-purple-700',
        variant === 'outline' && 'border-0'
      )}
      >
      <Button 
        variant={variant}
        className={cn(
          "hover:bg-cyan-500 active:translate-y-1 transition-all w-full uppercase py-6 font-bold rounded-lg",
          className,
          variant === 'outline' && 'text-cyan-500'
        )}
        {...props}
        >
        {children}
      </Button>
    </div>
  );
}