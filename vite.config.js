import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'


// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        vue(),
        viteCompression(),
    ]
})
