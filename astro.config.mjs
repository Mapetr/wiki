import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), sitemap(), compress(), cloudflare()],
  markdown: {
    syntaxHighlight: "prism"
  },
  prefetch: {
    defaultStrategy: "hover"
  },
  output: "server",
  adapter: cloudflare()
});
