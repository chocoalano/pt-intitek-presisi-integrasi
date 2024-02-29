import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: "/edit/:id",
      name: "tutorial-details",
      component: () => import("@/views/EditView.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("@/views/AddView.vue")
    }
  ]
})

export default router
