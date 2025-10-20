import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Text from '../Text'

describe('Text', () => {
  it('renderiza texto', () => {
    render(<Text>Hola mundo</Text>)
    expect(screen.getByText(/hola mundo/i)).toBeInTheDocument()
  })
})
