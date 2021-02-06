<template>
  <div class="now-playing">
    <h2 class="mt-5 mb-1">Now Playing Movies</h2>
    <v-skeleton-loader v-if="loading" max-width="150" type="text"></v-skeleton-loader>
    <p v-if="!loading" class="grey--text">{{ movies.dates.minimum }} - {{ movies.dates.maximum }}</p>

    <v-row>
      <v-col class="col-md-2">
        <MovieFilters :movies="movies" />
      </v-col>

      <MovieListSkeleton v-if="loading" />
      <MovieList v-if="!loading" :movies="movies" />
    </v-row>
  </div>
</template>

<script>
import MovieList from "@/components/Movie/MovieList";
import MovieFilters from "../components/Movie/MovieFilters.vue";
import MovieListSkeleton from "@/components/Movie/MovieListSkeleton";

export default {
  name: "NowPlaying",

  components: {
    MovieList,
    MovieFilters,
    MovieListSkeleton,
  },

  computed: {
    loading() {
      return this.$store.getters["movies/getLoading"];
    },

    movies() {
      return this.$store.getters["movies/getNowPlayingMovies"];
    },
  },

  created() {
    this.$store.dispatch("movies/nowPlayingMovies");
  },

  destroyed() {
    this.$store.commit("movies/SET_LOADING", true);
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
