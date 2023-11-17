import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        lem: resolve(__dirname, 'src/main.ts'),
      },
      output: [
        {
        entryFileNames: ({ facadeModuleId }) => facadeModuleId.includes('lem') ? 'lem.esm.js' : 'lem.esm.js',
          format: 'esm',
          dir: resolve(__dirname, 'lib')
        },
        {
          entryFileNames: ({ facadeModuleId }) => facadeModuleId.includes('lem') ? 'lem.cmj.js' : 'lem.cmj.js',
          format: 'commonjs',
          exports: 'named',
          dir: resolve(__dirname, 'lib')
        }
      ]
    }
  }
});
