<template>
  <v-col class="col-12 col-md-10">
    <v-row class="ma-0 mb-5 justify-center justify-sm-start" v-if="movies.items">
      <MovieItem v-for="movie in movies.items" :key="movie.id" :movie="movie" />
    </v-row>
  </v-col>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  name: "MovieList",

  props: {
    movies: Object,
  },

  components: {
    MovieItem,
  },
};
</script>
