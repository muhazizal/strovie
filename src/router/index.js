import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/popular",
    name: "Popular",
    component: () => import(/* webpackChunkName: "movies" */ "@/views/Popular.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
