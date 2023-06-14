import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      'import.meta.env.API_KEY': JSON.stringify(process.env.API_KEY),
      'import.meta.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
      'import.meta.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
      'import.meta.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
      'import.meta.env.MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID),
      'import.meta.env.APP_ID': JSON.stringify(process.env.APP_ID),
      'import.meta.env.MEASUREMENT_ID': JSON.stringify(process.env.MEASUREMENT_ID),
      'import.meta.env.ID_USER_ADMIN': JSON.stringify(process.env.ID_USER_ADMIN),
    }),
  ],
  
})
