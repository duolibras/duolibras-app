import { ReactNode } from "react";

interface ImageContainerProps {
  children: ReactNode;
}

export const ImageContainer = ({ children }: ImageContainerProps) => (
  <div className="flex justify-center">
    <div className="w-52">
      {children}
    </div>
  </div>
);
