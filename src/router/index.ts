import LayoutIndex from '@/Layout/LayoutIndex.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  // 需要改回createWebHistory, 问就是工作
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutIndex,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
