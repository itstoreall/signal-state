import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat', // Must be below test-utils
      'react/jsx-runtime': 'preact/jsx-runtime'
    }
  },
  server: { port: 3333 }
});

/*
https://vitejs.dev/config/
*/
