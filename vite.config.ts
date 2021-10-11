import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(), 
    // styleImport({
    // libs: [
    //   {
    //     libraryName: "react-vant",
    //     resolveStyle: (name) => `react-vant/lib/${name}/style/index.css`,
    //   },
    // ],
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
      "@": path.resolve(__dirname, "src"),
      "comps": path.resolve(__dirname, "src/components"),
      "img": path.resolve(__dirname, "src/assets/images"),
    }
  },
    /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
     base: './',
     /*
     server配置
     */
    server:{
      port:54188
    }
})
