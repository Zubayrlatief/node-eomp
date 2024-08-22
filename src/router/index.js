import { createRouter, createWebHistory } from 'vue-router'

const routes = 
[
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '@/views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '@/views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '@/views/ProductView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router