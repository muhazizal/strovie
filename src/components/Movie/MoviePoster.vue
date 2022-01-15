<template>
  <v-card class="mx-auto" width="100%">
    <v-img
      height="100%"
      width="100%"
      :alt="movieDetail.title"
      :src="
        movieDetail.poster_path === null
          ? '/img/svg/not-found.svg'
          : `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
      "
      :lazy-src="
        movieDetail.poster_path === null
          ? '/img/svg/not-found.svg'
          : `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
      "
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <slot name="movie-item"></slot>
  </v-card>
</template>
<script>
export default {
  name: 'MoviePoster',
  props: {
    movieDetail: Object,
  },
}
</script>
<style lang="scss" scoped>
.v-card {
  max-width: 15.625rem;
  @media screen and (min-width: 600px) {
    max-width: 21.875rem;
  }
  @media screen and (min-width: 1904px) {
    max-width: 25rem;
  }
}
</style>
