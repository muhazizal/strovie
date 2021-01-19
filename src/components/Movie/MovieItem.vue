<template>
  <v-card class="mx-auto mb-5" max-width="225" hover>
    <v-img
      height="330"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :lazy-src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
    ></v-img>

    <v-card-title class="pb-1 font-weight-bold">{{ movie.title }}</v-card-title>

    <v-card-text class="pb-0">
      {{ movie.release_date }}
    </v-card-text>

    <v-card-text class="mb-3">
      <v-row align="center" class="mx-0">
        <v-rating
          :value="movie.vote_average / 2"
          color="amber"
          background-color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="rating ml-4">{{ movie.vote_average }} ({{ movie.vote_count }})</div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MovieItem",

  props: {
    movie: Object,
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  &__title {
    font-size: 1em;
    line-height: 1.5rem;
  }

  .rating {
    font-size: 0.9em;
  }

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(3, 218, 198, 1) !important;
  }
}
</style>
