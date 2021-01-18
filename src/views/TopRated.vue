<template>
  <div class="top-rated">
    <h2 class="my-5">Top Rated Movies</h2>
    <v-row>
      <v-col class="col-md-2"> </v-col>
      <MovieList :movies="movies" />
    </v-row>
  </div>
</template>

<script>
import MovieList from "@/components/Movie/MovieList";

export default {
  name: "TopRated",

  components: {
    MovieList,
  },

  computed: {
    movies() {
      return this.$store.getters["movies/getTopRatedMovies"];
    },
  },

  created() {
    this.$store.dispatch("movies/topRatedMovies");
  },
};
</script>

<style lang="scss" scoped>
.top-rated {
  min-height: calc(100vh - 9.625rem);
}
</style>
