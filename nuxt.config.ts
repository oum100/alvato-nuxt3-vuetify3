// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  //Enable serversice rendereing 
  ssr:true,

  //import vuetify css
  css: [
    "@/assets/scss/style.scss",
    "vuetify/styles",
  ],

  //Build vuetify
  build: {
    transpile:["vuetify"]
  },

  //Config vite
  vite:{
    ssr:{
      noExternal:["vuetify"]
    },
    define:{
      "process.env.DEBUG":false
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  modules:[
    "nuxt-icon",
    [
      "@nuxtjs/robots",{
        userAgent:"*",
        Disallow:"/"
      }
    ],

    // this adds the vuetify vite plugin
		// also produces type errors in the current beta release
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  // app config
  app: {
    head: {
        htmlAttrs: {
            lang: "en",
        },
        bodyAttrs: {
            class: "demo"
        },
        charset: "utf-8",
        titleTemplate: '%s - Nuxt 3 Vuetify3',
        link: [
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@200;300;400;500;600;700&family=Inter:wght@200;300;400;500;600;700;800;900&display=swap",
            },
            {
              rel: "icon", 
              type: "image/x-icon", 
              href: "/favicon.ico"
            }
        ],
        meta: [
            { 
              name: 'viewport', 
              content: 'width=device-width, initial-scale=1, maximum-scale=5'
            },
            {
              name: 'author',
              content: "EIT Consulting Ltd., Thailand"
            },
          ]
    },
  },

  // runtime config
  // runtimeConfig: {
  //   public: {
  //       strapi: {
  //         url: process.env.STRAPI_URL || "http://localhost:1337/api",
  //       },
  //       urlroot: process.env.STRAPI_URL_ROOT || "http://localhost:1337",
  //   }
  // },
})
