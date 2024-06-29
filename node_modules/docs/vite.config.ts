import { defineConfig } from 'vite'
import  DefineOptions  from 'unplugin-vue-define-options/vite'  // 定义组件名

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DefineOptions()
  ],
})
