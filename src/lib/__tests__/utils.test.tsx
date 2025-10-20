import { describe, it, expect } from 'vitest'
import { cn } from '../utils'

describe('utils.cn', () => {
  it('concatena strings simples', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })
  it('ignora valores falsy y vacíos', () => {
    expect(cn('a', undefined, '', null as any, false as any, 'b')).toBe('a  b'.replace('  ', ' '))
  })
  it('aplasta arrays y mezcla condicionales', () => {
    const cond = true
    expect(cn(['x', cond && 'y', ['z']])).toBe('x y z')
  })
})
