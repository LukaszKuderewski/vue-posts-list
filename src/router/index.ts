import { createRouter, createWebHistory } from 'vue-router'
import WelcomeItemVue from '@/components/WelcomeItem.vue'
import TheList from '@/components/TheList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/sort/all'
    },
    {
      path: '/sort/:id',
      name: 'sort',
      component: TheList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
