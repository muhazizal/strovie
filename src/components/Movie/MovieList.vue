<template>
  <v-col class="col-12 col-md-10 px-0 pl-md-3">
    <v-row class="ma-0 mb-5 justify-center justify-sm-start" v-if="movies.items">
      <MovieListItem v-for="movie in movies.items" :key="movie.id" :movie="movie" />
    </v-row>
  </v-col>
</template>

<script>
import MovieListItem from "./MovieListItem";

export default {
  name: "MovieList",

  props: {
    movies: Object,
  },

  components: {
    MovieListItem,
  },
};
</script>
