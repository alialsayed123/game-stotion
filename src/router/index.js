import { createRouter, createWebHistory } from 'vue-router'
import dashboards from '../views/Dashboards.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: dashboards,
      children: [
        {
          path: "/dashboard",
          component: () => import("../views/dashboard.vue"),
        },
        {
          path: "/Course",
          component: () => import("../views/Course.vue"),
        },
        {
          path: "/Schedule",
          component: () => import("../views/Schedule.vue"),
        },
        {
          path: "/Form",
          component: () => import("../views/Form.vue"),
        },
        {
          path: "Library",
          component: () => import("../views/Library.vue"),
        },
        {
          path: "/Scoure",
          component: () => import("../views/Scoure.vue"),
        },
        {
          path: "/Services",
          component: () => import("../views/Services.vue"),
        },
      ],
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router
