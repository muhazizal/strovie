<template>
  <div class="movie">
    <v-row class="my-0 mt-3 justify-center">
      <v-col class="col-12 col-md-4 col-lg-3 col-xl-2 d-flex align-center">
        <MoviePosterSkeleton v-if="loading" />
        <MoviePoster v-if="!loading" :movieDetail="movieDetail" />
      </v-col>

      <v-col class="col-12 col-md-8 col-lg-6 col-xl-4 px-md-3 d-flex align-center mt-5 mt-md-0">
        <MovieOverviewSkeleton v-if="loading" />
        <MovieOverview v-if="!loading" :movieDetail="movieDetail" />
      </v-col>
    </v-row>

    <v-row class="my-0 justify-center">
      <v-col class="col-12 mt-6 pb-0">
        <h2>Recommendations</h2>
      </v-col>

      <v-col class="col-md-2">
        <MovieFilters :movies="movieRecommendations" />
      </v-col>

      <MovieListSkeleton v-if="loading" />
      <MovieList v-if="!loading" :movies="movieRecommendations" />
    </v-row>
  </div>
</template>

<script>
import MoviePoster from "@/components/Movie/MoviePoster";
import MovieOverview from "@/components/Movie/MovieOverview";
import MovieList from "@/components/Movie/MovieList";
import MovieFilters from "@/components/Movie/MovieFilters.vue";
import MovieListSkeleton from "@/components/Movie/MovieListSkeleton";
import MoviePosterSkeleton from "@/components/Movie/MoviePosterSkeleton";
import MovieOverviewSkeleton from "@/components/Movie/MovieOverviewSkeleton";

export default {
  name: "Movie",

  components: {
    MoviePoster,
    MovieOverview,
    MovieList,
    MovieFilters,
    MovieListSkeleton,
    MoviePosterSkeleton,
    MovieOverviewSkeleton,
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
