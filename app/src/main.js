import './css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueEvents from './plugins/events'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(VueEvents)
app.use(router)
app.mount('#app')
