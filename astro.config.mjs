import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
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
  },

  adapter: vercel()
});