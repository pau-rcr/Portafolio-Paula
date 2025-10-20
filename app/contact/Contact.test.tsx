import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import ContactScreen from './contact'

describe('Contact page', () => {
  it('renderiza la página de contacto (al menos un heading)', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <ContactScreen />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', { name: /información de contacto/i })
    ).toBeInTheDocument()
  })
})
