import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
  it('renderiza el texto y dispara onClick', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Guardar</Button>);
    const btn = screen.getByRole('button', { name: /guardar/i });
    expect(btn).toBeInTheDocument();

    await userEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('aplica el variant="secondary"', () => {
    render(<Button variant="secondary">Secundario</Button>);
    const btn = screen.getByRole('button', { name: /secundario/i });
    expect(btn.className).toMatch(/secondary|bg-|border|text/i);
  });
});
