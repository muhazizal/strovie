<template>
  <div class="popular">
    <h2 class="my-3 my-sm-5">Popular Movies</h2>

    <v-row>
      <v-col class="col-12 col-md-2">
        <MovieFilters :movies="movies" />
      </v-col>

      <MovieListSkeleton v-if="loading" />
      <MovieList v-if="!loading" :movies="movies" />
    </v-row>
  </div>
</template>

<script>
import MovieList from "@/components/Movie/MovieList";
import MovieFilters from "@/components/Movie/MovieFilters";
import MovieListSkeleton from "@/components/Movie/MovieListSkeleton";

export default {
  name: "Popular",

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
      return this.$store.getters["movies/getPopularMovies"];
    },
  },

  created() {
    this.$store.dispatch("movies/popularMovies");
  },

  destroyed() {
    this.$store.commit("movies/SET_LOADING", true);
  },
};
</script>

<style lang="scss" scoped>
.popular {
  min-height: calc(100vh - 9.625rem);
}
</style>
