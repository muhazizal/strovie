<template>
  <v-col class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-0 px-sm-3 px-xl-0 mx-xl-5">
    <router-link :to="`/movie/${movie.id}`" :key="$route.path" class="movie-link">
      <movie-poster :movieDetail="movie">
        <template v-slot:movie-item>
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
        </template>
      </movie-poster>
    </router-link>
  </v-col>
</template>

<script>
import MoviePoster from "./MoviePoster";

export default {
  name: "MovieListItem",

  props: {
    movie: Object,
  },

  components: {
    MoviePoster,
  },
};
</script>

<style lang="scss" scoped>
.movie-link {
  text-decoration: none;
}

.v-card {
  &__title {
    font-size: 0.875em;
    line-height: 1.25rem;
    word-break: break-word;
  }

  &__text {
    font-size: 0.75em;
    font-weight: 500;
  }

  &:hover {
    box-shadow: 0px 0px 15px 2px lightgrey !important;
  }

  .rating {
    font-weight: 500;
    padding-top: 0.125rem;
  }

  .v-image {
    min-height: 18.75rem;
  }
}
</style>
