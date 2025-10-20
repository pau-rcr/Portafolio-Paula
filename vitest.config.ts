import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'node:url' 
import { URL } from 'node:url'      

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,

    exclude: [
      'node_modules/**',
      'dist/**',
      '**/*.d.ts',
      'src/components/ui/**',
      'src/test/**',
    ],

    include: [
      'src/lib/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'src/hooks/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'src/components/{atoms,molecules,organisms}/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'src/pages/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'src/__tests__/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'src/App.{test,spec}.?(c|m)[jt]sx?',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: [
        'src/lib/**',
        'src/hooks/**',
        'src/components/atoms/**/*.{ts,tsx}',
        'src/components/molecules/**/*.{ts,tsx}',
        'src/components/organisms/**/*.{ts,tsx}',
        'src/pages/**/*.{ts,tsx}',
        'src/App.tsx'
      ],
      exclude: [
        'src/components/ui/**',
        'src/test/**',
        '**/*.d.ts',
      ],
    },
  },
})
