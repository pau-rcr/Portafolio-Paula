import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
import NotFound from '../NotFound'

describe('NotFound page', () => {
  const origError = console.error
  beforeAll(() => { vi.spyOn(console, 'error').mockImplementation(() => {}) })
  afterAll(() => { (console.error as any).mockRestore?.(); console.error = origError })

  it('muestra 404, el mensaje y el link a Home', () => {
    render(
      <MemoryRouter initialEntries={['/ruta-que-no-existe']}>
        <NotFound />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { level: 1, name: /^404$/ })).toBeInTheDocument()

    expect(screen.getByText(/oops! page not found/i)).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /return to home/i })
    expect(link).toHaveAttribute('href', '/')
  })
})
