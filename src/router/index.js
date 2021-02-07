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
    component: () => import(/* webpackChunkName: "popularMovies" */ "@/views/Popular.vue"),
  },
  {
    path: "/now-playing",
    name: "NowPlaying",
    component: () => import(/* webpackChunkName: "nowPlayingMovies" */ "@/views/NowPlaying.vue"),
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: () => import(/* webpackChunkName: "upcomingMovies" */ "@/views/Upcoming.vue"),
  },
  {
    path: "/top-rated",
    name: "TopRated",
    component: () => import(/* webpackChunkName: "topRatedMovies" */ "@/views/TopRated.vue"),
  },
  {
    path: "/search",
    name: "SearchResults",
    component: () => import(/* webpackChunkName: "searchMovies" */ "@/views/Search.vue"),
  },
  {
    path: "*",
    redirect: "/",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
