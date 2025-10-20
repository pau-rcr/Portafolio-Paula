interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-card rounded-xl p-6 shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.2)] hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.3)] transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
