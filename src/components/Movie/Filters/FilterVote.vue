<template>
  <div class="filter-vote">
    <v-btn text small @click="ascending ? sortMoviesByVoteAscending() : sortMoviesByVoteDescending()">
      <v-icon left dark>
        {{ ascending ? "mdi-sort-numeric-descending-variant" : "mdi-sort-numeric-ascending-variant" }}
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
      ascending: false,
    };
  },

  props: {
    movies: Object,
  },

  methods: {
    sortMoviesByVoteAscending() {
      const movieItems = this.movies.items;

      movieItems.sort((a, b) => a.vote_count - b.vote_count);
      this.ascending = false;
    },

    sortMoviesByVoteDescending() {
      const movieItems = this.movies.items;

      movieItems.sort((a, b) => b.vote_count - a.vote_count);
      this.ascending = true;
    },
  },
};
</script>

<style scoped></style>
