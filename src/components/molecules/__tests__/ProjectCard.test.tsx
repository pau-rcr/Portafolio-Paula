import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProjectCard from '../ProjectCard'

describe('ProjectCard', () => {
  const mockProject = {
    name: "Test Project",
    type: "Web App",
    description: "Test description",
    githubUrl: "https://github.com/test/repo"
  }

  it('renderiza el nombre del proyecto', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renderiza el tipo de proyecto', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Web App')).toBeInTheDocument()
  })
})
