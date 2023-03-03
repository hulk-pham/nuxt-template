export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "My App",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
    },
  },
  postcss: {
    plugins: {
      "postcss-nested": {},
    },
  },
  experimental: {
    reactivityTransform: true,
  },
  runtimeConfig: {
    apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  ssr: false,
  routeRules: {},
  modules: ["@nuxt/content", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
});
