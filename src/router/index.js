import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: AboutView,
    },
    {
      path: '/contato',
      name: 'Contato',
      component: ContactView,
    }
  ],
})

export default router
