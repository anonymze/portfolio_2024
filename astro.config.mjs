import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  site: 'https://anonymze.github.io',
  // base: 'portfolio_2024',
  integrations: [react()],
  output: "server",
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [svgr()]
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing:  {
      prefixDefaultLocale: false,
      // redirectToDefaultLocale: false
    }
  }
});
