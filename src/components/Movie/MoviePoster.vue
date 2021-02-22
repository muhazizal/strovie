<template>
  <v-card>
    <v-img
      height="100%"
      width="100%"
      contain
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
  </v-card>
</template>

<script>
export default {
  name: "MoviePoster",

  props: {
    movieDetail: Object,
  },
};
</script>
