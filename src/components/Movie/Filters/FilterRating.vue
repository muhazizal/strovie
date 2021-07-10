<template>
  <div class="filter-rating">
    <v-btn text small @click="ascending ? sortMoviesByRatingAscending() : sortMoviesByRatingdescending()">
      <v-icon left dark small>
        {{ ascending ? "mdi-sort-numeric-ascending" : "mdi-sort-numeric-descending" }}
      </v-icon>
      Sort By Rating
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "FilterRating",
  data() {
    return {
      ascending: false,
    };
  },
  props: {
    movies: Object,
  },
  methods: {
    sortMoviesByRatingAscending() {
      const movieItems = this.movies.items;

      movieItems.sort((a, b) => a.vote_average - b.vote_average);
      this.ascending = false;
    },
    sortMoviesByRatingdescending() {
      const movieItems = this.movies.items;

      movieItems.sort((a, b) => b.vote_average - a.vote_average);
      this.ascending = true;
    },
  },
};
</script>
<style scoped></style>
