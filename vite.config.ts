import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'BoringAvatarsSolid',
      // the proper extensions will be added
      fileName: 'boring-avatars-solid'
    },
  },
});
