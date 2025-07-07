import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {}
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components.ts'),
      name: 'ECAComponents',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    emptyOutDir: true
  },
  test: {
    include: ['./src/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup/setup-test-env.ts'],
    globals: true,
    restoreMocks: true,
    coverage: {
      include: ['app/**/*.{ts,tsx}'],
      all: true,
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true
    },
    environmentMatchGlobs: [['**/*.test.tsx', 'jsdom']]
  }
});
