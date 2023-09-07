import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import AppPage from '@/views/AppPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppPage,
    children: [
      {
        path: '/',
        redirect: '/log'
      },
      {
        path: 'log',
        component: () => import('@/views/LogPage.vue')
      },
      {
        path: 'workouts',
        component: () => import('@/views/WorkoutsPage.vue')
      },
      {
        path: 'progress',
        component: () => import('@/views/ProgressPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
