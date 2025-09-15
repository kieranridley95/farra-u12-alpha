import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/farra-u12-alpha/',
    plugins: [react()]
});