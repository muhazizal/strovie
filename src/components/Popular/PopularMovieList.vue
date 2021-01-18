<template>
  <v-col class="col-md-10">
    <v-row class="ma-0">
      <PopularMovieItem v-for="movie in movies.items[movies.page - 1]" :key="movie.id" :movie="movie" />
    </v-row>
  </v-col>
</template>

<script>
import PopularMovieItem from "./PopularMovieItem";

export default {
  name: "PopularMovieList",

  components: {
    PopularMovieItem,
  },

  computed: {
    movies() {
      return this.$store.getters["movies/getMovies"];
    },
  },

  created() {
    this.$store.dispatch("movies/popularMovies");
  },
};
</script>
