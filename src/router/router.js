import {
  createWebHistory,
  createRouter,
  createWebHashHistory,
} from "vue-router";

import Home from "../pages/Home.vue";
import Settings from "../pages/Settings.vue";

const router = createRouter({
  history: process.env.IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/settings",
      component: Settings,
    },
  ],
});

export default router;
