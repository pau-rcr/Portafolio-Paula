import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Contact from '../Contact'

describe('Contact page', () => {
  it('renderiza la página de contacto (al menos un heading)', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Contact />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', { name: /información de contacto/i })
    ).toBeInTheDocument()
  })
})
