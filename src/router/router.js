import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import Settings from "../pages/Settings.vue";

const history = createWebHistory();
const router = createRouter({
  history,
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
