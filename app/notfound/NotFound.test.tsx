import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
import NotFoundScreen from './notfound'

describe('NotFound page', () => {
  const origError = console.error
  beforeAll(() => { vi.spyOn(console, 'error').mockImplementation(() => {}) })
  afterAll(() => { (console.error as any).mockRestore?.(); console.error = origError })

  it('muestra 404, el mensaje y el link a Home', () => {
    render(
      <MemoryRouter initialEntries={['/ruta-que-no-existe']}>
        <NotFoundScreen />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { level: 1, name: /^404$/ })).toBeInTheDocument()

    expect(screen.getByText(/ups! página no encontrada/i)).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /volver al inicio/i })
    expect(link).toHaveAttribute('href', '/')
  })
})
