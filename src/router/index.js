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
  {
    path: "/now-playing",
    name: "NowPlaying",
    component: () => import(/* webpackChunkName: "movies" */ "@/views/NowPlaying.vue"),
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: () => import(/* webpackChunkName: "movies" */ "@/views/Upcoming.vue"),
  },
  {
    path: "/top-rated",
    name: "TopRated",
    component: () => import(/* webpackChunkName: "movies" */ "@/views/TopRated.vue"),
  },
  {
    path: "/search",
    name: "SearchResults",
    component: () => import(/* webpackChunkName: "movies" */ "@/views/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
