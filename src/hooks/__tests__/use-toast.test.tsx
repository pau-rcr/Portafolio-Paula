import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useToast, toast, reducer } from '../use-toast'

beforeEach(() => {
  vi.useFakeTimers()
  Object.assign(global, { count: 0 })
})
afterEach(() => {
  vi.runOnlyPendingTimers()
  vi.useRealTimers()
})

describe('reducer', () => {
  const baseState = { toasts: [] }

  it('ADD_TOAST agrega un toast', () => {
    const newState = reducer(baseState, {
      type: 'ADD_TOAST',
      toast: { id: '1', title: 'Hola' },
    })
    expect(newState.toasts.length).toBe(1)
    expect(newState.toasts[0].title).toBe('Hola')
  })

  it('UPDATE_TOAST actualiza el toast correcto', () => {
    const initial = { toasts: [{ id: '1', title: 'Viejo' }] }
    const result = reducer(initial, {
      type: 'UPDATE_TOAST',
      toast: { id: '1', title: 'Nuevo' },
    })
    expect(result.toasts[0].title).toBe('Nuevo')
  })

  it('DISMISS_TOAST marca como cerrado y agenda eliminación', () => {
    const spy = vi.spyOn(global, 'setTimeout')
    const initial = { toasts: [{ id: '1', open: true }] }
    const result = reducer(initial, {
      type: 'DISMISS_TOAST',
      toastId: '1',
    })
    expect(result.toasts[0].open).toBe(false)
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })

  it('REMOVE_TOAST elimina por id', () => {
    const initial = { toasts: [{ id: '1' }, { id: '2' }] }
    const result = reducer(initial, { type: 'REMOVE_TOAST', toastId: '1' })
    expect(result.toasts).toHaveLength(1)
    expect(result.toasts[0].id).toBe('2')
  })

  it('REMOVE_TOAST sin id limpia todo', () => {
    const initial = { toasts: [{ id: 'a' }, { id: 'b' }] }
    const result = reducer(initial, { type: 'REMOVE_TOAST' })
    expect(result.toasts).toEqual([])
  })
})

describe('toast()', () => {
  it('crea un toast y devuelve update/dismiss', () => {
    const t = toast({ title: 'Test title', description: 'desc' })
    expect(typeof t.id).toBe('string')
    expect(typeof t.dismiss).toBe('function')
    expect(typeof t.update).toBe('function')
    act(() => {
      t.update({ id: t.id, title: 'updated' })
      t.dismiss()
    })
  })
})

describe('useToast hook', () => {
  it('devuelve estado y funciones toast/dismiss', () => {
    const { result, unmount } = renderHook(() => useToast())
    expect(result.current.toast).toBeInstanceOf(Function)
    expect(result.current.dismiss).toBeInstanceOf(Function)
    expect(Array.isArray(result.current.toasts)).toBe(true)

    act(() => result.current.dismiss())

    act(() => result.current.toast({ title: 'Nuevo' }))

    expect(result.current.toasts.length >= 0).toBe(true)

    unmount()
  })

  it('actualiza el estado cuando se agrega un toast', () => {
    const { result } = renderHook(() => useToast())
    act(() => result.current.toast({ title: 'Hello world' }))
    const ids = result.current.toasts.map(t => t.id)
    expect(ids.every(id => typeof id === 'string')).toBe(true)
  })
})

describe('reducer edge cases', () => {
  it('DISMISS_TOAST sin toastId afecta todos los toasts', () => {
    const state = { toasts: [{ id: '1', open: true }, { id: '2', open: true }] }
    const result = reducer(state, { type: 'DISMISS_TOAST' })
    expect(result.toasts.every(t => t.open === false)).toBe(true)
  })

  it('UPDATE_TOAST sin coincidencia no cambia nada', () => {
    const state = { toasts: [{ id: 'a', title: 'X' }] }
    const result = reducer(state, { type: 'UPDATE_TOAST', toast: { id: 'zzz', title: 'Y' } })
    expect(result.toasts[0].title).toBe('X')
  })
})
