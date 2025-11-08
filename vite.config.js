import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import obfuscator from 'rollup-plugin-obfuscator';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),

    // Plugin optimisasi gambar (otomatis kompres + convert WebP/AVIF)
    ViteImageOptimizer({
      webp: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: [0.6, 0.8] },
      avif: { quality: 50 },
    }),

    // Plugin obfuscator (mengamankan JS build + hilangkan console.log)
    {
      ...obfuscator({
        compact: true,
        disableConsoleOutput: true, // hilangkan semua console.log di build
      }),
      enforce: 'post', // jalankan terakhir agar obfuscate setelah build selesai
    },
  ],

  // Optional (tapi disarankan) – optimalkan build
  build: {
    target: 'esnext', // hasil build modern
    chunkSizeWarningLimit: 800, // peringatan ukuran bundle
    minify: 'esbuild', // gunakan esbuild (lebih cepat dari terser)
  },
});
