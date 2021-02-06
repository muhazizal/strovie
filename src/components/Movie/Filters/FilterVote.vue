<template>
  <div class="filter-vote">
    <v-btn text small @click="ascending ? sortMoviesByVoteAscending() : sortMoviesByVoteDescending()">
      <v-icon left dark>
        {{ ascending ? "mdi-sort-numeric-ascending-variant" : "mdi-sort-numeric-descending-variant" }}
      </v-icon>
      Sort By Vote
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "FilterVote",

  data() {
    return {
      ascending: true,
    };
  },

  props: {
    movies: Object,
  },

  methods: {
    sortMoviesByVoteAscending() {
      const moviePage = this.movies.page;
      const movieItem = this.movies.items[moviePage - 1];

      movieItem.sort((a, b) => a.vote_count - b.vote_count);
      this.ascending = false;
    },

    sortMoviesByVoteDescending() {
      const moviePage = this.movies.page;
      const movieItem = this.movies.items[moviePage - 1];

      movieItem.sort((a, b) => b.vote_count - a.vote_count);
      this.ascending = true;
    },
  },
};
</script>

<style scoped></style>
