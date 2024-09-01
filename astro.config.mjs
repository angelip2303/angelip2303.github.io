import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://angelip2303.github.io/",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    icon(),
  ],
});
