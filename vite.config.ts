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
      entry: resolve(__dirname, 'src/lib/Avatar.tsx'),
      name: 'BoringAvatarsSolid',
      fileName: (format) => `boring-avatars-solid.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ['solid-js']
    }
  },
});
