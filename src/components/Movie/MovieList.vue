<template>
  <v-col class="col-md-10">
    <v-row class="ma-0">
      <MovieItem v-for="movie in movies.items[movies.page - 1]" :key="movie.id" :movie="movie" />
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
