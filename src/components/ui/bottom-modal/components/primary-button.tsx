interface ButtonProps {
  label: string;
  action: () => void;
  variant: 'primary' | 'secondary';
}

export const Button = ({ label, action, variant }: ButtonProps) => {
  const baseStyle = "w-full py-4 rounded-xl font-semibold transition-colors";
  const styles = {
    primary: `${baseStyle} bg-gradient-to-r from-cyan-400 to-blue-500 text-white`,
    secondary: `${baseStyle} text-cyan-400 hover:text-cyan-300 bg-gray-800/50`
  };

  return (
    <button 
      onClick={action}
      className={styles[variant]}
    >
      {label}
    </button>
  );
};
