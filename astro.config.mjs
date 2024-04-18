import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://regal-tanuki-5c70fd.netlify.app",
  integrations: [preact()]
});