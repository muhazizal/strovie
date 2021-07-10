<template>
  <div class="now-playing">
    <h2 class="mt-5 mb-1">Now Playing Movies</h2>
    <v-skeleton-loader v-if="loading" max-width="150" type="text"></v-skeleton-loader>
    <p v-if="!loading" class="grey--text">{{ movies.dateMinimum }} - {{ movies.dateMaximum }}</p>
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
  name: "NowPlaying",
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
      return this.$store.getters["movies/getNowPlayingMovies"];
    },
  },
  async created() {
    await this.$store.dispatch("movies/nowPlayingMovies");
    await this.$store.commit("SET_LOADING", false);
  },
  destroyed() {
    this.$store.commit("SET_LOADING", true);
  },
};
</script>
<style lang="scss" scoped>
.now-playing {
  min-height: calc(100vh - 9.625rem);
  p {
    font-size: 0.875em;
  }
}
</style>
