/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    
  ],
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
   base: './',
   /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
   // outDir: 'dist',
   server: {
     // hostname: '0.0.0.0',
     host: "localhost",
     port: 3000,
     // // 是否自动在浏览器打开
     // open: true,
     // // 是否开启 https
     // https: false,
     // // 服务端渲染
     // ssr: false,
     proxy: {
       '/api': {
         target: 'http://10.1.6.105:8084/', // 常志本地
         changeOrigin: true,
         ws: true
       },
     },
   },
   resolve: {
     // 导入文件夹别名
     alias: {
       '@': path.resolve(__dirname, './src'),
       views: path.resolve(__dirname, './src/views'),
       components: path.resolve(__dirname, './src/components'),
       utils: path.resolve(__dirname, './src/utils'),
       scss: path.resolve(__dirname, "./src/scss"),
       assets: path.resolve(__dirname, "./src/assets"),
       store: path.resolve(__dirname, "./src/store"),
       router: path.resolve(__dirname, "./src/router"),
       server: path.resolve(__dirname, "./src/server")
      //  mixins: path.resolve(__dirname, "./src/mixins")
     },
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        chunkFileNames: (chunkInfo: any) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : []
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
          return `js/${fileName}/[name].[hash].js`
        }
      }
    }
  }
})
