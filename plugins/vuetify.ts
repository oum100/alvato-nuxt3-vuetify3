// import this after install `@mdi/font` package
// import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import custom icons from helpers
import { aliases, custom } from "~/helpers/customIcons"

// import themes from helpers
import { LIGHT_THEME, lightTheme, DARK_THEME, darkTheme } from "~/helpers/themes"

// import defaults from helpers
import { defaults } from "~/helpers/defaults"


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr:true,

    // default vuetify components
    defaults,

    // theme options
    theme: {
        defaultTheme: LIGHT_THEME,
        themes: {
            lightTheme,
            darkTheme,
        },
        // add color variations
        variations: {
            colors: ["primary", "secondary"],
            lighten: 3,
            darken: 3,
        }
    },
    // icons options
    icons: {
        defaultSet: "custom",
        aliases,
        sets: {
            custom,
        },
    },
  })
  app.vueApp.use(vuetify)
})
