import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathSrc = resolve(__dirname, "./src");

export default defineConfig({
  base: '/v3/',
  resolve: { alias: { "@host": pathSrc } },
  plugins: [vue()],
  server: {
    port: 8070,
  },
  build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"],
    sourcemap: true,
  },
})
