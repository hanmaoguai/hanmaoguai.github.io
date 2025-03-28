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
      children: [
        {
          path: '/home',
          name: 'content',
          component: () => import('@/views/home/HomeIndex.vue'),
        },
        {
          path: '/archivist',
          name: 'archivist',
          component: () => import('@/views/archivist/ArchivistIndex.vue'),
        },
      ]
    },
  ],
})

export default router
