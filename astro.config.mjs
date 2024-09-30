// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  devToolbar: {
    enabled: true,
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
