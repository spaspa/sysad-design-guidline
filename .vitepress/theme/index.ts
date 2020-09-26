import {Theme} from 'vitepress'
import registerComponents from "./registerComponents"
import DefaultTheme from 'vitepress/dist/client/theme-default'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({app, router, siteData}) {
    registerComponents(app)
    console.log(siteData)
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  }
}

export default theme
