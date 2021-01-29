<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <v-card class="mx-auto mb-5" width="100%" hover>
      <v-img
        height="100%"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :lazy-src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      ></v-img>

      <v-card-title class="pb-1 font-weight-bold">{{ editedMovieTitle }}</v-card-title>

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
  </v-col>
</template>

<script>
export default {
  name: "MovieItem",

  props: {
    movie: Object,
  },

  computed: {
    editedMovieTitle() {
      let newTitle = this.movie.title;

      if (newTitle.length > 18) {
        newTitle = newTitle.substring(0, 18) + "...";
      }

      return newTitle;
    },
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
