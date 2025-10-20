import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Presentation from '../Presentation'

describe('Presentation page', () => {
  it('renderiza contenido principal (al menos un heading)', () => {
    render(
      <MemoryRouter initialEntries={['/presentation']}>
        <Presentation />
      </MemoryRouter>
    )
    expect(screen.getAllByRole('heading').length).toBeGreaterThan(0)
  })
})
