import { createRouter, createWebHistory } from 'vue-router'
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
  ]
})

export default router
