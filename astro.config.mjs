import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import darkModern from "./dark-modern.json";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: darkModern,
    },
  },
  server: {
    port: 3000,
  },
});
