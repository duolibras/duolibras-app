"use client"

import { cn } from "@/lib/utils";
import { Haptics, ImpactStyle, } from '@capacitor/haptics';
import { Button, ButtonProps } from "./button";
interface IProps extends ButtonProps {
  variant?: 'default' | 'secondary' | 'outline';
}

export function InteractButton({ children, className, variant = 'default', ...props }: IProps) {
  function onPress() {
    // if (window.navigator) {
    //   window.navigator.vibrate([500]);
    // }
    Haptics.impact({ style: ImpactStyle.Medium }).catch(alert);
  }

  return (
    <div 
      className={cn(
        "border-b-4 border-solid border-cyan-600 rounded-xl",
        variant === 'secondary' && 'border-purple-700',
        variant === 'outline' && 'border-0'
      )}
      >
      <Button 
        onClickCapture={onPress}
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