import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
export let routes: RouteRecordRaw[] = [
  {
    path: "/onepage",
    name: "OnePage",
    component: () => import("@host/views/OnePage.vue"),
    meta: {
      title: "OnePage",
    },
  },
  {
    path: "/v3/onepage",
    redirect: { name: "OnePage" },
  },
  {
    path: "/v3",
    redirect: { name: "OnePage" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: {},
    beforeEnter: async () => {
      window.location.assign("/");
      return false;
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
