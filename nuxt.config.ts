import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["assets/css/main.css"],
  modules: ["@nuxtjs/seo"],
  future: {
    compatibilityVersion: 4,
  },
  typescript: {
    typeCheck: true,
  },
});