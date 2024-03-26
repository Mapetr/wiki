import {defineConfig, passthroughImageService} from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), sitemap(), compress()],
  markdown: {
    syntaxHighlight: "prism"
  },
  prefetch: {
    defaultStrategy: "hover"
  },
  image: {
    provider: passthroughImageService()
  },
  output: "server",
  adapter: cloudflare(),
  site: "https://wiki.ayai.dev"
});
