<template>
  <div class="popular">
    <h2 class="my-3 my-sm-5">Popular Movies</h2>
    <v-row>
      <v-col class="col-12 col-md-2">
        <movie-filters :movies="movies" />
      </v-col>
      <movie-list-skeleton v-if="loading" />
      <movie-list v-if="!loading" :movies="movies" />
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Popular",
  components: {
    MovieList: () => import("@/components/Movie/MovieList"),
    MovieFilters: () => import("@/components/Movie/MovieFilters"),
    MovieListSkeleton: () => import("@/components/Movie/MovieListSkeleton"),
  },
  computed: {
    loading() {
      return this.$store.getters["getLoading"];
    },
    movies() {
      return this.$store.getters["movies/getPopularMovies"];
    },
  },
  async created() {
    await this.$store.dispatch("movies/popularMovies");
    await this.$store.commit("SET_LOADING", false);
  },
  destroyed() {
    this.$store.commit("SET_LOADING", true);
  },
};
</script>
<style lang="scss" scoped>
.popular {
  min-height: calc(100vh - 9.625rem);
}
</style>
