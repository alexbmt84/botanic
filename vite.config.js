import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'


// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        vue(),
        viteCompression(),
    ],
    server: {
        host: 'stephanebeaumontjardinier.com',
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true,
        },
        https: {
            key: fs.readFileSync('C:/laragon/etc/ssl/laragon.key'),
            cert: fs.readFileSync('C:/laragon/etc/ssl/laragon.crt'),
        },
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
    css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  },
    envPrefix: 'VITE_'
})
