import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from a GitHub Pages project site at /btss-donation-app/.
// All public-asset URLs are built from import.meta.env.BASE_URL so they
// resolve correctly under this subpath.
export default defineConfig({
  base: "/btss-donation-app/",
  plugins: [react()],
});
