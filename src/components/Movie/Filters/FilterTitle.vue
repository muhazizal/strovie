<template>
  <div class="filter-title">
    <v-btn text small @click="ascending ? sortMoviesByTitleAscending() : sortMoviesByTitledescending()">
      <v-icon left dark>
        {{ ascending ? "mdi-sort-ascending" : "mdi-sort-descending" }}
      </v-icon>
      Sort By Title
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "FilterTitle",

  data() {
    return {
      ascending: true,
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
      this.ascending = false;
    },

    sortMoviesByTitledescending() {
      const moviePage = this.movies.page;
      const movieItem = this.movies.items[moviePage - 1];

      movieItem.sort((a, b) => b.title.localeCompare(a.title));
      this.ascending = true;
    },
  },
};
</script>

<style scoped></style>
