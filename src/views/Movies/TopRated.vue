<template>
  <div class="top-rated">
    <h2 class="my-5">Top Rated Movies</h2>
    <v-row>
      <v-col class="col-md-2">
        <movie-filters :movies="movies" />
      </v-col>
      <movie-list-skeleton v-if="loading" />
      <movie-list v-if="!loading" :movies="movies" />
    </v-row>
  </div>
</template>
<script>
export default {
  name: "TopRated",
  components: {
    MovieList: () => import("@/components/Movie/MovieList"),
    MovieFilters: () => import("@/components/Movie/MovieFilters.vue"),
    MovieListSkeleton: () => import("@/components/Movie/MovieListSkeleton"),
  },
  computed: {
    loading() {
      return this.$store.getters["getLoading"];
    },
    movies() {
      return this.$store.getters["movies/getTopRatedMovies"];
    },
  },
  async created() {
    await this.$store.dispatch("movies/topRatedMovies");
    await this.$store.commit("SET_LOADING", false);
  },
  destroyed() {
    this.$store.commit("SET_LOADING", true);
  },
};
</script>
<style lang="scss" scoped>
.top-rated {
  min-height: calc(100vh - 9.625rem);
}
</style>
