import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/popular",
  },
  {
    path: "/popular",
    name: "Popular",
    component: () => import(/* webpackChunkName: "popularMovies" */ "@/views/Movies/Popular.vue"),
  },
  {
    path: "/now-playing",
    name: "NowPlaying",
    component: () => import(/* webpackChunkName: "nowPlayingMovies" */ "@/views/Movies/NowPlaying.vue"),
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: () => import(/* webpackChunkName: "upcomingMovies" */ "@/views/Movies/Upcoming.vue"),
  },
  {
    path: "/top-rated",
    name: "TopRated",
    component: () => import(/* webpackChunkName: "topRatedMovies" */ "@/views/Movies/TopRated.vue"),
  },
  {
    path: "/search",
    name: "SearchResults",
    component: () => import(/* webpackChunkName: "searchMovies" */ "@/views/Movies/Search.vue"),
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: () => import(/* webpackChunkName: "movieDetail" */ "@/views/Movie/MovieDetail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
