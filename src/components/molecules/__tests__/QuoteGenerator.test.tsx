import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import QuoteGenerator from '../QuoteGenerator'

describe('QuoteGenerator', () => {
  it('muestra la primera frase y cambia a otra al hacer click', async () => {
    render(<QuoteGenerator />)
    const firstQuote = /la ciencia es el alma de la prosperidad/i
    expect(screen.getByText(firstQuote)).toBeInTheDocument()

    const rnd = vi.spyOn(Math, 'random').mockReturnValue(0.35)

    await userEvent.click(screen.getByRole('button', { name: /nueva frase/i }))

    expect(screen.queryByText(firstQuote)).not.toBeInTheDocument()

    expect(screen.getByText(/".+"/)).toBeInTheDocument()

    rnd.mockRestore()
  })
})
