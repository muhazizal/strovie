<template>
  <div class="movie-detail">
    <h1>{{ movieDetail.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",

  computed: {
    movieDetail() {
      return this.$store.getters["movie/getMovieDetail"];
    },
  },

  created() {
    const movieId = this.$route.params.id;

    this.$store.dispatch("movie/movieDetail", movieId);
  },
};
</script>

<style lang="scss" scoped>
.movie-detail {
  .now-playing {
    min-height: calc(100vh - 9.625rem);
  }
}
</style>
