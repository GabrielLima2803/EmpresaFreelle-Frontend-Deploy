import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/cadastro',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: () => import('../views/ForgotPasswordView.vue'),
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('../views/ResetPasswordView.vue'),
    },
    {
      path: '/home',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/home/update',
      name: 'UpdateProfile',
      component: () => import('@/components/Profile/Modal/UpdateProfile.vue'),
    },
    {
      path: '/home/images',
      name: 'Images',
      component: () => import('@/components/Profile/Modal/CreateImage.vue'),
    }
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('../views/NotFoundView.vue'),
    // }
  ],
})

export default router
