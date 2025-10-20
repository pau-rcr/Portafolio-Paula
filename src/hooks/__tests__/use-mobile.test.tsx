import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useIsMobile } from '../use-mobile';
import { vi } from 'vitest';

type Mql = {
  media: string;
  matches: boolean;
  addEventListener: (type: 'change', cb: (e: { matches: boolean; media: string }) => void) => void;
  removeEventListener: (type: 'change', cb: (e: { matches: boolean; media: string }) => void) => void;
  addListener: (cb: (e: { matches: boolean; media: string }) => void) => void;        // compat viejo
  removeListener: (cb: (e: { matches: boolean; media: string }) => void) => void;     // compat viejo
  onchange: ((e: { matches: boolean; media: string }) => void) | null;
  dispatchEvent: (ev: Event) => boolean;
};

let currentWidth = 1024;
const mqls: Mql[] = [];

function computeMatches(query: string, width: number) {
  const m = /max-width:\s*(\d+)px/.exec(query);
  if (m) return width <= Number(m[1]);
  return false;
}

function makeMql(query: string): Mql {
  const listeners = new Set<(e: { matches: boolean; media: string }) => void>();
  const mql: Mql = {
    media: query,
    matches: computeMatches(query, currentWidth),
    addEventListener: (_type, cb) => listeners.add(cb),
    removeEventListener: (_type, cb) => listeners.delete(cb),
    addListener: (cb) => listeners.add(cb),
    removeListener: (cb) => listeners.delete(cb),
    onchange: null,
    dispatchEvent: () => true,
  };

  (mql as any)._listeners = listeners;
  mqls.push(mql);
  return mql;
}

function setViewportWidth(w: number) {
  currentWidth = w;
  Object.defineProperty(window, 'innerWidth', { value: w, configurable: true });
  window.dispatchEvent(new Event('resize'));
  for (const mql of mqls) {
    const matches = computeMatches(mql.media, w);
    if (mql.matches !== matches) {
      mql.matches = matches;
      const evt = { matches, media: mql.media };
      (mql as any)._listeners?.forEach((cb: any) => cb(evt));
      mql.onchange?.(evt);
    }
  }
}

describe('useIsMobile', () => {
  beforeEach(() => {

    vi.stubGlobal('matchMedia', (q: string) => makeMql(q));
    setViewportWidth(1024);
  });

  it('devuelve false en desktop y true cuando baja de 768px', () => {
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => setViewportWidth(480));
    expect(result.current).toBe(true);
  });
});
