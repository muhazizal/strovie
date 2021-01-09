<template>
  <div class="popular">
    <h2 class="my-5">Popular Movies</h2>
    <v-row>
      <v-col class="col-md-2"> </v-col>
      <v-col class="col-md-10">
        <v-row class="ma-0">
          <v-card class="mx-auto mb-5" max-width="225" v-for="movie in movies.items[movies.page - 1]" :key="movie.id">
            <v-img height="330" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"></v-img>

            <v-card-title>{{ movie.title }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                <div class="grey--text ml-4">
                  4.5 (413)
                </div>
              </v-row>

              <div>
                {{ movie.overview }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
              <v-chip-group active-class="deep-purple accent-4 white--text" column>
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text>
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.getters["movies/getMovies"];
    },
  },

  created() {
    this.$store.dispatch("movies/popularMovies");
    console.log(this.movies);
  },
};
</script>

<style lang="scss" scoped>
.popular {
  min-height: calc(100vh - 9.625rem);
}
</style>
