import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader(),
    AutoImport({
      imports: ["vue", "@vueuse/core", "pinia", "vue-router", "vue-i18n"],
      resolvers: [
        ElementPlusResolver(),
      ],
      vueTemplate: true,
      dts: "auto-imports.d.ts",
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

