<template>
  <div class="search">
    <h2 class="mt-5 mb-1">Search Results</h2>
    <v-row>
      <v-col class="col-md-2">
        <MovieFilters :movies="movies" />
      </v-col>

      <MovieList :movies="movies" />
    </v-row>
  </div>
</template>

<script>
import MovieList from "@/components/Movie/MovieList";
import MovieFilters from "../components/Movie/MovieFilters.vue";

export default {
  name: "Search",

  components: {
    MovieList,
    MovieFilters,
  },

  created() {
    // fetch searched movie when the page refreshed
    const movie = this.$route.query.title;
    this.$store.dispatch("movies/searchMovies", movie);
  },

  computed: {
    movies() {
      return this.$store.getters["movies/getSearchMovies"];
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  min-height: calc(100vh - 9.625rem);
}
</style>
