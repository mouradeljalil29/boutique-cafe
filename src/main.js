import App from './App.vue'
import { routes, scrollBehavior } from './router'
import './style.css'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(
  App,
  { routes, routerOptions: { scrollBehavior } }
)