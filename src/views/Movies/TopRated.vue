<template>
  <div class="top-rated">
    <h2 class="my-5">Top Rated Movies</h2>
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
import MovieFilters from "@/components/Movie/MovieFilters.vue";
import MovieListSkeleton from "@/components/Movie/MovieListSkeleton";

export default {
  name: "TopRated",

  components: {
    MovieList,
    MovieFilters,
    MovieListSkeleton,
  },

  computed: {
    loading() {
      return this.$store.getters["getLoading"];
    },

    movies() {
      return this.$store.getters["movies/getTopRatedMovies"];
    },
  },

  created() {
    this.$store.dispatch("movies/topRatedMovies");
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
