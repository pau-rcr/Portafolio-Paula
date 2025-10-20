import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Text from '../atoms/Text';

interface ContactItemProps {
  type: 'email' | 'phone' | 'location' | 'linkedin' | 'github';
  value: string;
}

const ContactItem = ({ type, value }: ContactItemProps) => {
  const icons = {
    email: Mail,
    phone: Phone,
    location: MapPin,
    linkedin: Linkedin,
    github: Github
  };

  const Icon = icons[type];

  const getHref = () => {
    if (type === 'email') return `mailto:${value}`;
    if (type === 'linkedin' || type === 'github') return value;
    return undefined;
  };

  const displayValue = type === 'linkedin' || type === 'github' 
    ? value.replace('https://www.', '').replace('https://', '')
    : value;

  const content = (
    <>
      <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-full">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <Text variant="body">{displayValue}</Text>
    </>
  );

  const href = getHref();

  if (href) {
    return (
      <a 
        href={href}
        target={type === 'linkedin' || type === 'github' ? '_blank' : undefined}
        rel={type === 'linkedin' || type === 'github' ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-muted transition-colors"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
      {content}
    </div>
  );
};

export default ContactItem;
