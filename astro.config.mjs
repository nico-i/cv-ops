import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://cv.nico.ismaili.de",
  devToolbar: { enabled: false },
  image: {
    domains: ["res.cloudinary.com"],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
