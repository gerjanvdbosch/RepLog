import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from '@/views/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainPage,
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
        path: 'routines',
        component: () => import('@/views/RoutinesPage.vue')
      },
      {
        path: 'statistics',
        component: () => import('@/views/StatisticsPage.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/ProfilePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
