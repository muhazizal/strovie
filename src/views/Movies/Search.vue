<template>
  <div class="search">
    <p class="mt-5 mb-0 movie-title">{{ this.$route.query.title }}</p>
    <h2>Search Results</h2>

    <v-row>
      <v-col class="col-md-2">
        <MovieFilters :movies="movies" />
      </v-col>

      <MovieListSkeleton v-if="loading" />
      <MovieList v-if="!loading" :movies="movies" />
    </v-row>
  </div>
</template>

<script>
import MovieList from "@/components/Movie/MovieList";
import MovieFilters from "@/components/Movie/MovieFilters";
import MovieListSkeleton from "@/components/Movie/MovieListSkeleton";

export default {
  name: "Search",

  components: {
    MovieList,
    MovieFilters,
    MovieListSkeleton,
  },

  computed: {
    loading() {
      return this.$store.getters["getLoading"];
    },

    movies() {
      return this.$store.getters["movies/getSearchMovies"];
    },
  },

  async created() {
    const movie = this.$route.query.title;

    if (movie) {
      await this.$store.dispatch("movies/searchMovies", movie);
      await this.$store.commit("SET_LOADING", false);
    }
  },

  destroyed() {
    this.$store.commit("SET_LOADING", true);
  },
};
</script>

<style lang="scss" scoped>
.search {
  min-height: calc(100vh - 9.625rem);

  .movie-title {
    font-size: 1.5em;
    font-weight: 300;
    text-transform: uppercase;
  }

  &-form {
    text-align: end;
  }

  h2 {
    font-size: 1em;
  }
}
</style>