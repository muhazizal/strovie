<template>
  <v-col class="col-12 col-md-10 px-0 py-2 ma-0">
    <h3>Movie Filters</h3>
    <v-btn v-if="swap === true" text small @click="sortMoviesByTitleAscending">
      <v-icon left dark>
        mdi-sort
      </v-icon>
      Sort By Title
    </v-btn>

    <v-btn v-if="swap === false" text small @click="sortMoviesByTitleDecending">
      <v-icon left dark>
        mdi-sort
      </v-icon>
      Sort By Title
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "MovieFilters",

  data() {
    return {
      swap: true,
    };
  },

  props: {
    movies: Object,
  },

  methods: {
    sortMoviesByTitleAscending() {
      const moviePage = this.movies.page;
      const movieItem = this.movies.items[moviePage - 1];

      movieItem.sort((a, b) => a.title.localeCompare(b.title));
      this.swap = false;
    },

    sortMoviesByTitleDecending() {
      const moviePage = this.movies.page;
      const movieItem = this.movies.items[moviePage - 1];

      movieItem.sort((a, b) => b.title.localeCompare(a.title));
      this.swap = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
