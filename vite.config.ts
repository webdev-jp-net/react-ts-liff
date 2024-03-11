// import fs from 'fs'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'

// const isLocal = process.env.NODE_ENV === 'development' // 環境変数で判断

// const httpsOptions = isLocal
//   ? {
//       key: fs.readFileSync('./localhost-key.pem'),
//       cert: fs.readFileSync('./localhost-cart.pem'),
//     }
//   : undefined

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-router-dom',
            'react-dom',
            'react-redux',
            '@reduxjs/toolkit',
            '@reduxjs/toolkit/query/react',
            'redux-persist',
          ],
        },
      },
    },
  },
  server: {
    // https: httpsOptions,
    host: '0.0.0.0',
    port: 3000,
  },
  // ローカル開発環境でHTTPSを有効にするときだけコメントアウトを外す。コメントアウトせずコミットすると、GitHub Actionsでbuild失敗する。
  // preview: {
  //   https: {
  //     key: fs.readFileSync('./localhost-key.pem'),
  //     cert: fs.readFileSync('./localhost-cart.pem'),
  //   },
  // },
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      routes: '/src/routes',
      store: '/src/store',
      style: '/src/style',
      types: '/src/types',
    },
  },
})
