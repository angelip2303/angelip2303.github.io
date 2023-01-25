import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://angelip2303.github.io/",
  integrations: [tailwind(), image()],
});
