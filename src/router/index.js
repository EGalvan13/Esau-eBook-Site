import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/',
      component: () => import('../layouts/Default.vue'),
      meta: { requiredAuth: true },
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/book/:id',
          name: 'BookDetails',
          component: () => import('../views/BookDetails.vue')
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/contact',
          name: 'Contact',
          component: () => import('../views/ContactView.vue')
        },
      ]
    },
    {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    meta: { isGuest: true },
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
      { path: '/login', name: 'Login', component: () => import('../views/LoginView.vue') },
      { path: '/register', name: 'Register', component: () => import('../views/Registration.vue') },
    ]
  },
  ],
});


router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth && !localStorage.getItem('TOKEN')) {
      next({ name: 'Login' })
    } else if (localStorage.getItem('TOKEN') && (to.meta.isGuest)) {
      next({ name: 'Home' })
    } else {
      next()
    }
  })

export default router;
