<template>
  <div class="movie">
    <v-row class="my-0 justify-center">
      <v-col class="col-12 col-md-4 col-lg-3">
        <MoviePoster :movieDetail="movieDetail" />
      </v-col>

      <v-col class="col-12 col-md-8 col-lg-6 px-sm-7 px-md-3 d-flex align-center">
        <MovieOverview :movieDetail="movieDetail" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MoviePoster from "@/components/Movie/MoviePoster";
import MovieOverview from "@/components/Movie/MovieOverview";

export default {
  name: "Movie",

  components: {
    MoviePoster,
    MovieOverview,
  },

  computed: {
    movieDetail() {
      return this.$store.getters["movie/getMovieDetail"];
    },
    movieCredits() {
      return this.$store.getters["movie/getMovieCredits"];
    },
  },

  async created() {
    const movieId = this.$route.params.id;

    await this.$store.dispatch("movie/movieDetail", movieId);
    await this.$store.dispatch("movie/movieCredits", movieId);
  },
};
</script>

<style lang="scss" scoped>
.movie {
  min-height: calc(100vh - 9.625rem);
  display: flex;
  align-items: center;
}
</style>
