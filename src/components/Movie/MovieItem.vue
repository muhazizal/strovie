<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-0 px-sm-3">
    <v-card class="mx-auto " width="100%" hover>
      <v-img
        height="100%"
        :src="
          movie.poster_path === null
            ? '../../assets/images/not-found.svg'
            : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        "
        :lazy-src="
          movie.poster_path === null
            ? '../../assets/images/not-found.svg'
            : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        "
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-card-title class="pb-1 font-weight-bold">{{ movie.title }}</v-card-title>

      <v-card-text class="pb-0">
        {{ movie.release_date }}
      </v-card-text>

      <v-card-text>
        <v-row class="mx-0">
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
  </v-col>
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
    font-size: 0.875em;
    line-height: 1.25rem;
  }

  &__text {
    font-size: 0.75em;
  }

  .rating {
    font-weight: 500;
    padding-top: 0.125rem;
  }

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(3, 218, 198, 1) !important;
  }
}
</style>
