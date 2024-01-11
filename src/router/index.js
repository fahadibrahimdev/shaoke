import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('@/views/HomeView/index.vue')
    },
    {
      path: '/why-shaoke',
      name: 'WhyUsView',
      component: () => import('@/views/WhyUs/index.vue'),
      meta: {
        title: 'WHY SHAOKE'
      }
    },
    {
      path: '/solutions',
      name: 'SolutionsView',
      component: () => import('@/views/Solutions/index.vue'),
      meta: {
        title: 'Solutions'
      }
    },
    {
      path: '/cases',
      name: 'CasesView',
      component: () => import('@/views/CaseSolutions/index.vue'),
      meta: {
        title: 'Cases'
      }
    },
    {
      path: '/case-details/shipkoo',
      name: 'CasesDetailsView',
      component: () => import('@/views/CaseDetails/index.vue'),
      meta: {
        title: 'Shipkoo'
      }
    },
    {
      path: '/contact-us',
      name: 'ContactUsView',
      component: () => import('@/views/ContactUs/index.vue'),
      meta: {
        title: 'Contact'
      }
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
