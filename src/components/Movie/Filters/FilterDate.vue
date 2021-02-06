<template>
  <div class="filter-date">
    <v-btn text small @click="ascending ? sortMoviesByDateAscending() : sortMoviesByDatedescending()">
      <v-icon left dark>
        {{ ascending ? "mdi-sort-calendar-ascending" : "mdi-sort-calendar-descending" }}
      </v-icon>
      Sort By Date
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "FilterDate",

  data() {
    return {
      ascending: true,
    };
  },

  props: {
    movies: Object,
  },

  methods: {
    sortMoviesByDateAscending() {
      const moviePage = this.movies.page;
      const movieItem = this.movies.items[moviePage - 1];

      movieItem.sort((a, b) => a.release_date.localeCompare(b.release_date));
      this.ascending = false;
    },

    sortMoviesByDatedescending() {
      const moviePage = this.movies.page;
      const movieItem = this.movies.items[moviePage - 1];

      movieItem.sort((a, b) => b.release_date.localeCompare(a.release_date));
      this.ascending = true;
    },
  },
};
</script>

<style scoped></style>
