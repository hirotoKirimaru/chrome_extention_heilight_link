// import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";
import manifest from './manifest.json';

export default defineConfig({
//   plugins: [react(), crx({ manifest })],
  plugins: [crx({ manifest })],
});