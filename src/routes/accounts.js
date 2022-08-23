export default [
  {
    path: '/accounts/login',
    component: () => import('@/views/accounts/LoginPage.vue'),
  },
  {
    path: '/accounts/sign-up',
    component: () => import('@/views/accounts/SignupPage.vue'),
  },
  {
    path: '/accounts/profile',
    component: () => import('@/views/accounts/ProfilePage.vue'),
  },
  {
    path: '/accounts/modify',
    component: () => import('@/views/accounts/ModifyPage.vue'),
  },
];