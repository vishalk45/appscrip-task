import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["./app/assets/css/main.css"],

app: {
  head: {
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  },
},

  vite: {
    plugins: [tailwindcss()], 
  },

  modules: ["@nuxt/ui"],
});
