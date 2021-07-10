<template>
  <v-col class="col-12 col-md-10 px-0 py-2 ma-0">
    <h3 class="filter-title">Movie Filters</h3>
    <filter-title :movies="movies" />
    <filter-date :movies="movies" />
    <filter-rating :movies="movies" />
    <filter-vote :movies="movies" />
  </v-col>
</template>
<script>
export default {
  name: "MovieFilters",
  components: {
    FilterTitle: () => import("./Filters/FilterTitle"),
    FilterDate: () => import("./Filters/FilterDate"),
    FilterRating: () => import("./Filters/FilterRating"),
    FilterVote: () => import("./Filters/FilterVote.vue"),
  },
  props: {
    movies: Object,
  },
};
</script>
<style lang="scss">
.filter-title {
  font-size: 1em;
}
.v-btn {
  span {
    font-size: 0.875em;
  }
}
</style>
