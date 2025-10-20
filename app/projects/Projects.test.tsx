import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import ProjectsScreen from './projects'

describe('Projects page', () => {
  it('renderiza contenido principal (al menos un heading)', () => {
    render(
      <MemoryRouter initialEntries={['/proyectos']}>
        <ProjectsScreen />
      </MemoryRouter>
    )
    expect(screen.getAllByRole('heading').length).toBeGreaterThan(0)
  })
})
