import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactInfo, { Contact } from '../ContactInfo'

describe('ContactInfo', () => {
  it('renderiza datos básicos de contacto usando props', () => {
    const contacts: Contact[] = [
      { type: 'email', value: 'c@example.com' },
      { type: 'phone', value: '+56 9 1234 5678' },
      { type: 'github', value: 'https://github.com/paupircr' },
    ];
    render(<ContactInfo contacts={contacts} />);

    expect(screen.getByRole('heading', { name: /información de contacto/i })).toBeInTheDocument();
    expect(screen.getByText(/c@example\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+56 9 1234 5678/)).toBeInTheDocument();
    expect(screen.getByText(/github\.com\/paupircr/i)).toBeInTheDocument();
  });
});
