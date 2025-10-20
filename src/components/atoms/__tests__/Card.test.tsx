import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from '../Card'
import Text from '../Text'

describe('Card', () => {
  it('muestra contenido', () => {
    render(<Card><Text>Hola</Text></Card>)
    expect(screen.getByText(/hola/i)).toBeInTheDocument()
  })
})
