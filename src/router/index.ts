import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: HomeView,
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    // console.log('in scroll behaviour: ', to)
    const paths = ['home', 'about', 'projects', 'contact']
    const path = to.path.slice(1)
    if (paths.includes(to.name as string)) {
      return {
        el: `#${to.name as string}`,
        behavior: 'smooth'
      }
    }
  }
})

export default router
