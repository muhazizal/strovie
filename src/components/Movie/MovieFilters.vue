<template>
  <v-col class="col-12 col-md-10 px-0 py-2 ma-0">
    <h3 class="filter-title">Movie Filters</h3>

    <FilterTitle :movies="movies" />
    <FilterDate :movies="movies" />
    <FilterRating :movies="movies" />
    <FilterVote :movies="movies" />
  </v-col>
</template>

<script>
import FilterTitle from "./Filters/FilterTitle";
import FilterDate from "./Filters/FilterDate";
import FilterRating from "./Filters/FilterRating";
import FilterVote from "./Filters/FilterVote.vue";

export default {
  name: "MovieFilters",

  components: {
    FilterTitle,
    FilterDate,
    FilterRating,
    FilterVote,
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
    font-size: 0.833em;
  }
}
</style>
