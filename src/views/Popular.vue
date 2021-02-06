<template>
  <div class="popular">
    <h2 class="my-3 my-sm-5">Popular Movies</h2>

    <v-row>
      <v-col class="col-12 col-md-2">
        <MovieFilters :movies="movies" />
      </v-col>

      <MovieList :movies="movies" />
    </v-row>
  </div>
</template>

<script>
import MovieList from "@/components/Movie/MovieList";
import MovieFilters from "@/components/Movie/MovieFilters";

export default {
  name: "Popular",

  components: {
    MovieList,
    MovieFilters,
  },

  computed: {
    movies() {
      return this.$store.getters["movies/getPopularMovies"];
    },
  },

  created() {
    this.$store.dispatch("movies/popularMovies");
  },
};
</script>

<style lang="scss" scoped>
.popular {
  min-height: calc(100vh - 9.625rem);
}
</style>
