interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'small';
  className?: string;
}

const Text = ({ children, variant = 'body', className = '' }: TextProps) => {
  const variants = {
    h1: 'text-4xl md:text-5xl font-bold text-foreground',
    h2: 'text-3xl md:text-4xl font-bold text-foreground',
    h3: 'text-xl md:text-2xl font-semibold text-foreground',
    body: 'text-base text-foreground',
    small: 'text-sm text-muted-foreground'
  };

  const Tag = variant === 'h1' || variant === 'h2' || variant === 'h3' ? variant : 'p';

  return (
    <Tag className={`${variants[variant]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Text;
