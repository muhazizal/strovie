<template>
  <div class="filter-date">
    <v-btn text small @click="ascending ? sortMoviesByDateAscending() : sortMoviesByDatedescending()">
      <v-icon left dark small>
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
      ascending: false,
    };
  },
  props: {
    movies: Object,
  },
  methods: {
    sortMoviesByDateAscending() {
      const movieItems = this.movies.items;

      movieItems.sort((a, b) => a.release_date.localeCompare(b.release_date));
      this.ascending = false;
    },
    sortMoviesByDatedescending() {
      const movieItems = this.movies.items;

      movieItems.sort((a, b) => b.release_date.localeCompare(a.release_date));
      this.ascending = true;
    },
  },
};
</script>
<style scoped></style>
