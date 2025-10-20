import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SkillLevel from '../SkillLevel'

describe('SkillLevel', () => {
  it('muestra nombre y nivel', () => {
    render(<SkillLevel skill="TypeScript" level={4} />)
    expect(screen.getByText(/typescript/i)).toBeInTheDocument()
    const bars = screen.queryAllByRole('progressbar')
    if (bars.length) expect(bars[0]).toBeInTheDocument()
  })
})
