// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/apollo", "@nuxt/eslint", "@nuxtjs/tailwindcss"],

  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.API_URL || "http://localhost:1337"}/graphql`,
      },
    },
  },

  // http: {
  //   baseURL: `${process.env.API_URL || "http://localhost:1337"}/api`,
  //   browserBaseURL: `${process.env.API_URL || "http://localhost:1337"}/api`,
  // },
})