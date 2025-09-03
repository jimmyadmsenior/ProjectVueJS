import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Sempre volta para o topo quando muda de página
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/SlotsView.vue')
    },
    {
      path: '/router',
      name: 'router',
      component: () => import('../views/RouterView.vue')
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('../views/PracticeView.vue')
    }
  ]
})

export default router
