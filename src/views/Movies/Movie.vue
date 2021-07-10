<template>
  <div class="movie">
    <v-row class="my-0 mt-3 justify-center">
      <v-col class="col-12 col-md-4 col-lg-3 col-xl-2 d-flex align-center">
        <movie-poster-skeleton v-if="loading" />
        <movie-poster v-if="!loading" :movieDetail="movieDetail" />
      </v-col>
      <v-col class="col-12 col-md-8 col-lg-6 col-xl-4 px-md-3 d-flex align-center mt-5 mt-md-0">
        <movie-overview-skeleton v-if="loading" />
        <movie-overview v-if="!loading" :movieDetail="movieDetail" />
      </v-col>
    </v-row>
    <v-row class="my-0 justify-center">
      <v-col class="col-12 mt-6 pb-0">
        <h2>Recommendations</h2>
      </v-col>
      <v-col class="col-md-2">
        <movie-filters :movies="movieRecommendations" />
      </v-col>
      <movie-list-skeleton v-if="loading" />
      <movie-list v-if="!loading" :movies="movieRecommendations" />
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Movie",
  components: {
    MoviePoster: () => import("@/components/Movie/MoviePoster"),
    MovieOverview: () => import("@/components/Movie/MovieOverview"),
    MovieList: () => import("@/components/Movie/MovieList"),
    MovieFilters: () => import("@/components/Movie/MovieFilters.vue"),
    MovieListSkeleton: () => import("@/components/Movie/MovieListSkeleton"),
    MoviePosterSkeleton: () => import("@/components/Movie/MoviePosterSkeleton"),
    MovieOverviewSkeleton: () => import("@/components/Movie/MovieOverviewSkeleton"),
  },
  computed: {
    loading() {
      return this.$store.getters["getLoading"];
    },
    movieDetail() {
      return this.$store.getters["movie/getMovieDetail"];
    },
    movieRecommendations() {
      return this.$store.getters["movie/getMovieRecommendations"];
    },
  },
  async created() {
    const movieId = this.$route.params.id;

    if (movieId) {
      await this.$store.dispatch("movie/movieDetail", movieId);
      await this.$store.dispatch("movie/movieRecommendations", movieId);
      await this.$store.commit("SET_LOADING", false);
    }
  },
  destroyed() {
    this.$store.commit("SET_LOADING", true);
  },
};
</script>
<style lang="scss" scoped>
.movie {
  min-height: calc(100vh - 9.625rem);
  display: flex;
  flex-direction: column;
}
</style>
