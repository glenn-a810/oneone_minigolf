import { defineConfig } from 'vite';

// 정적 호스팅(GitHub Pages, 사내 CDN 등) 어디에 올려도 동작하도록 상대 경로 기반으로 빌드한다.
export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
});
