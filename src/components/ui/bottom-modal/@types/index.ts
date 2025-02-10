interface ButtomProps {
  label: string;
  action: () => void;
}

export interface BottomModalContentProps {
  image?: ReactNode; // For some reason this is show a error when i import from react
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onClose: () => void;
  primaryButton?: ButtomProps;
  secondaryButton?: ButtomProps;
}
