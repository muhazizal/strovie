<template>
  <div class="data">
    <div class="data-header">
      <h3 class="data-header-title">{{ movieDetail.title }}</h3>
      <p class="data-header-tagline">{{ movieDetail.tagline }}</p>
      <p class="data-header-time">{{ movieDetail.release_date }} &bull; {{ convertedRuntime }}</p>
      <v-row class="mx-0">
        <v-rating
          :value="movieDetail.vote_average / 2"
          color="amber"
          background-color="amber"
          dense
          half-increments
          readonly
          size="16"
        ></v-rating>

        <div class="data-header-rating ml-4">{{ movieDetail.vote_average }} ({{ movieDetail.vote_count }})</div>
      </v-row>
    </div>

    <div class="data-genres mt-6">
      <h3 class="data-genres-title">Genres</h3>

      <div class="data-genres-items">
        <v-chip class="data-genres-item" v-for="genre in movieDetail.genres" :key="genre.id" label outlined small>
          <v-icon left small>mdi-play-circle</v-icon>
          {{ genre.name }}
        </v-chip>
      </div>
    </div>

    <div class="data-synopsis mt-3">
      <h3 class="data-synopsis-title">Synopsis</h3>

      <p class="data-synopsis-caption">{{ movieDetail.overview }}</p>
    </div>

    <div class="data-actions">
      <v-btn class="mr-3" rounded outlined tag="a" :href="movieDetail.homepage">
        <v-icon left>mdi-netflix</v-icon>
        Netflix
      </v-btn>

      <v-btn
        class="mr-3"
        rounded
        outlined
        tag="a"
        :href="`https://www.imdb.com/title/${movieDetail.homepage}`"
        target="_blank"
        noreferer
      >
        <v-icon left>mdi-web</v-icon>
        IMDB
      </v-btn>

      <v-btn class="mr-3" rounded outlined>
        <v-icon left>mdi-youtube</v-icon>
        Trailer
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieData",

  props: {
    movieDetail: Object,
  },

  computed: {
    convertedRuntime() {
      const hours = Math.floor(this.movieDetail.runtime / 60);
      const minutes = this.movieDetail.runtime % 60;
      return `${hours}h ${minutes}m`;
    },
  },
};
</script>

<style lang="scss" scoped>
.data {
  &-header {
    &-rating {
      font-size: 0.813em;
      font-weight: 500;
      padding-top: 0.25rem;
    }
  }

  &-genres {
    &-items {
      display: flex;
    }

    &-item {
      padding: 0 0.75rem;
      margin-right: 0.75rem;
    }
  }

  &-synopsis {
    &-caption {
      font-size: 0.875em;
    }
  }

  &-actions {
    .v-btn.v-size--default {
      font-size: 0.75em !important;
    }
  }
}
</style>
