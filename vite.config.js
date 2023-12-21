import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import 'intersection-observer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


import { config } from 'dotenv';
config();