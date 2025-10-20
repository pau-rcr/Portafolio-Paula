import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactItem from '../ContactItem'

describe('ContactItem', () => {
  it('muestra el valor del contacto y el enlace correcto', () => {
    render(<ContactItem type="email" value="c@example.com" />)
    expect(screen.getByText(/c@example\.com/i)).toBeInTheDocument()
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'mailto:c@example.com')
  })
})
