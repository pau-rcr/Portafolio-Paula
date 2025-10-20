import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

const QuoteGenerator = () => {
  const quotes = [
    "La ciencia es el alma de la prosperidad de las naciones y la fuente de vida de todo progreso. - Louis Pasteur",
    "Las matemáticas son el alfabeto con el cual Dios ha escrito el universo. - Galileo Galilei",
    "La información no es conocimiento. - Albert Einstein",
    "El ordenador nació para resolver problemas que antes no existían. - Bill Gates",
    "La mejor forma de predecir el futuro es inventarlo. - Alan Kay",
    "El código es como el humor. Cuando tienes que explicarlo, es malo. - Cory House",
    "La programación no se trata de lo que sabes, se trata de lo que puedes descubrir. - Chris Pine",
    "Los buenos programadores saben qué escribir. Los grandes saben qué reescribir. - Eric Raymond",
    "La ciencia es una forma de pensar mucho más que un cuerpo de conocimiento. - Carl Sagan",
    "Las matemáticas puras son, a su manera, la poesía de las ideas lógicas. - Albert Einstein",
    "El conocimiento es poder. - Francis Bacon",
    "La tecnología es solo una herramienta. En términos de llevar a los niños a trabajar juntos y motivarlos, el profesor es lo más importante. - Bill Gates",
    "La lógica te llevará de A a B. La imaginación te llevará a todas partes. - Albert Einstein",
    "Aprender a escribir programas estira tu mente y te ayuda a pensar mejor. - Bill Gates",
    "La única forma de hacer un gran trabajo es amar lo que haces. - Steve Jobs"
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="text-center p-8 bg-card rounded-xl shadow-lg">
      <Text variant="h3" className="mb-4">Frase del Día</Text>
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg mb-6 min-h-[160px] flex items-center justify-center">
        <Text variant="body" className="italic text-center">"{currentQuote}"</Text>
      </div>
      <Button onClick={generateRandomQuote} variant="primary" className="gap-2">
        <RefreshCw className="w-4 h-4" />
        Nueva Frase
      </Button>
    </div>
  );
};

export default QuoteGenerator;
