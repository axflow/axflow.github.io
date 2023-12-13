import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://axflow.github.io",
  base: "/axflow.github.io",
  integrations: [tailwind()],
});
