import Card from '../atoms/Card';
import Text from '../atoms/Text';
import ContactItem from '../molecules/ContactItem';
import QuoteGenerator from '../molecules/QuoteGenerator';

type ContactType = 'email' | 'phone' | 'location' | 'linkedin' | 'github';
export type Contact = { type: ContactType; value: string };

const DEFAULT_CONTACTS: Contact[] = [
  { type: 'email',    value: 'paula.caroromero@gmail.com' },
  { type: 'phone',    value: '+56 9 1234 5678' },
  { type: 'location', value: 'Talagante, Region Metropolitana, Chile' },
  { type: 'linkedin', value: 'https://www.linkedin.com/in/paula-caro-romero-06a50838b/' },
  { type: 'github',   value: 'https://github.com/pau-rcr' }
];

interface ContactInfoProps {
  contacts?: Contact[];
}

const ContactInfo = ({ contacts = DEFAULT_CONTACTS }: ContactInfoProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
      <Card>
        <Text variant="h2" className="mb-6">Información de Contacto</Text>
        <div className="space-y-4">
          {contacts.map((contact, idx) => (
            <ContactItem key={idx} type={contact.type} value={contact.value} />
          ))}
        </div>
      </Card>
      <div>
        <QuoteGenerator />
      </div>
    </div>
  );
};

export default ContactInfo;
