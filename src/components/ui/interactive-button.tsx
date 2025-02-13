"use client"

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";
interface IProps extends ButtonProps {
  variant?: 'default' | 'secondary' | 'outline';
  disabled?: boolean;
}

export function InteractButton({ children, className, variant = 'default', disabled, ...props }: IProps) {
  return (
    <div 
      className={cn(
        "border-b-4 border-solid border-cyan-600 rounded-xl w-full",
        variant === 'secondary' && 'border-purple-700',
        variant === 'outline' && 'border-0',
        disabled && 'border-gray-400'
      )}
      >
      <Button 
        variant={variant}
        disabled={disabled}
        className={cn(
          "hover:bg-cyan-500 active:translate-y-1 transition-all w-full uppercase py-6 font-bold rounded-lg",
          className,
          variant === 'outline' && 'text-cyan-500',
          disabled && 'bg-gray-300 text-gray-50'
        )}
        {...props}
        >
        {children}
      </Button>
    </div>
  );
}