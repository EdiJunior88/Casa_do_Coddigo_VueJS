import { createRouter, createWebHistory } from 'vue-router'

const App = () => import('../App.vue')
const CepChecker = () => import('../CepChecker.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/cep',
      name: 'cep',
      component: CepChecker
    }
  ]
})

export default router
