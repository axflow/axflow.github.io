import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://axflow.github.io",
  integrations: [tailwind(), mdx()],
  redirects: {
    "/book": {
      status: 302,
      destination: "https://calendly.com/nichochar/30min",
    },
    "/demo": {
      status: 302,
      destination: "https://calendly.com/nichochar/axflow-customer-demo",
    },
  },
});
