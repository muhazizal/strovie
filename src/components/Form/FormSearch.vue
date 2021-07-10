<template>
  <form class="d-flex justify-center" :class="inDrawer ? 'inDrawer' : ''" @submit.prevent="searchMovies">
    <v-theme-provider root>
      <v-text-field
        dense
        outlined
        clearable
        v-model="movie"
        name="movie"
        placeholder="Search Movie"
        type="search"
        hide-details="auto"
        prepend-inner-icon="mdi-magnify"
        @keydown.enter.prevent="searchMovies"
      />
    </v-theme-provider>
  </form>
</template>
<script>
export default {
  name: "FormSearch",
  props: {
    inDrawer: Boolean,
    drawer: Boolean,
  },
  data() {
    return {
      movie: "",
    };
  },
  methods: {
    async searchMovies() {
      if (!this.movie) {
        return;
      }

      await this.$store.dispatch("movies/searchMovies", this.movie);

      this.$router
        .push({
          path: "/search",
          query: {
            title: this.movie,
          },
        })
        .catch((error) => {
          return error;
        });

      this.$emit("toggleDrawer");
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  width: 100%;
  max-width: 25rem;
}
.inDrawer {
  padding: 1rem 1rem 0 1rem;
  max-width: 100% !important;
}
</style>
