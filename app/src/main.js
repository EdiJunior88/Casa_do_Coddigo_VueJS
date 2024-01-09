import './css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueEvents from './plugins/events'

const app = createApp(App)

app.use(VueEvents)
app.use(router)
app.mount('#app')
