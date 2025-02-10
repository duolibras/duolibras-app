
interface ContentProps {
  title: string;
  subtitle?: string;
}

export const BottomSheetModalContent = ({ title, subtitle }: ContentProps) => (
  <div className="text-center space-y-3">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-300/90 text-lg">
        {subtitle}
      </p>
    )}
  </div>
);
