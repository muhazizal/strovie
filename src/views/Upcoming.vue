<template>
  <div class="upcoming">
    <h2 class="mt-5 mb-1">Upcoming Movies</h2>
    <p class="grey--text">{{ movies.dates.minimum }} - {{ movies.dates.maximum }}</p>
    <v-row>
      <v-col class="col-md-2"> </v-col>
      <MovieList :movies="movies" />
    </v-row>
  </div>
</template>

<script>
import MovieList from "@/components/Movie/MovieList";

export default {
  name: "Upcoming",

  components: {
    MovieList,
  },

  computed: {
    movies() {
      return this.$store.getters["movies/getUpcomingMovies"];
    },
  },

  created() {
    this.$store.dispatch("movies/upcomingMovies");
  },
};
</script>

<style lang="scss" scoped>
.upcoming {
  min-height: calc(100vh - 9.625rem);

  p {
    font-size: 0.875em;
  }
}
</style>
