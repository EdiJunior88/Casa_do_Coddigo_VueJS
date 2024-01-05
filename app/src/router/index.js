import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/page/HomePage.vue')
const CepChecker = () => import('@/views/CepChecker.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/cep',
      name: 'cep',
      component: CepChecker
    }
  ]
})

export default router
