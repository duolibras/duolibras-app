interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-3 rounded-lg font-medium transition-colors";
  const variantStyles = {
    primary: "bg-gradient-to-r from-cyan-500 to-cyan-700 text-white hover:opacity-90",
    secondary: "bg-gray-800 text-white hover:bg-gray-700"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
