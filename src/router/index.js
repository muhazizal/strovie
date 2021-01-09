import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
// const SearchResult = () => import("../views/SearchResult.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/search-result",
  //   name: "SearchResult",
  //   component: SearchResult,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
