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
  // {
  //   path: "/",
  //   redirect: { name: "OnePage" },
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: {},
  //   beforeEnter: async () => {
  //     window.location.assign("/");
  //     return false;
  //   },
  // },
];

export const router = createRouter({
  history: createWebHistory("/v3"),
  routes,
});

export default router;
