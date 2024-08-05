import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: `https://cv.nico.ismaili.de`,
  devToolbar: { enabled: false },
  image: {
    domains: [`res.cloudinary.com`],
  },
  integrations: [
    astroI18next(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
