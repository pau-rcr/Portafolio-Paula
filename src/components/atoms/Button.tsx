interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105';
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.2)] hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.3)]',
    secondary: 'bg-secondary text-secondary-foreground shadow-md hover:shadow-lg'
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
