import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/resume-builder-old/",
  resolve: { alias: { "@": resolve(__dirname, "src") } },
  server: { open: true }
})
