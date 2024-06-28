import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  DefineOptions  from 'unplugin-vue-define-options/vite'  // 定义组件名

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions()
  ],
})
