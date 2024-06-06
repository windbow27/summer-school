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

  modules: [
    "@nuxtjs/apollo", 
    "@nuxt/eslint", 
    "@nuxtjs/tailwindcss", 
    "@nuxtjs/strapi"],

  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.API_URL || "http://localhost:1337"}/graphql`,
      },
    },
  },

  strapi: {
    cookie: {
      path: '/',
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      sameSite: true
    }
  }
})