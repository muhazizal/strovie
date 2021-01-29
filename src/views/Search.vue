<template>
  <div class="search">
    <h2 class="mt-5 mb-1">Search Results</h2>
    <v-row>
      <v-col class="col-md-2"> </v-col>
      <MovieList :movies="movies" />
    </v-row>
  </div>
</template>

<script>
import MovieList from "@/components/Movie/MovieList";

export default {
  name: "Search",

  components: {
    MovieList,
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
