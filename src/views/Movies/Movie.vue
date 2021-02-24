<template>
  <div class="movie">
    <v-row class="my-0 justify-center">
      <v-col class="col-12 col-md-3">
        <MoviePoster :movieDetail="movieDetail" />
      </v-col>

      <v-col class="col-12 col-md-6">
        <MovieData :movieDetail="movieDetail" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MoviePoster from "@/components/Movie/MoviePoster";
import MovieData from "@/components/Movie/MovieData";

export default {
  name: "Movie",

  components: {
    MoviePoster,
    MovieData,
  },

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
.movie {
  min-height: calc(100vh - 9.625rem);
  display: flex;
  align-items: center;
}
</style>
