<template>
  <form class="d-flex justify-center" :class="inDrawer ? 'inDrawer' : ''" @submit.prevent>
    <v-theme-provider root>
      <v-text-field
        v-model="movie"
        name="movie"
        label="Search movie"
        dense
        outlined
        clearable
        type="search"
        prepend-inner-icon="mdi-magnify"
        @keydown.enter.prevent="searchMovies"
        hide-details="auto"
      ></v-text-field>
    </v-theme-provider>
  </form>
</template>

<script>
import router from "@/router/index";

export default {
  name: "FormSearchMovie",

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
      router.push({ path: "/search", query: { title: this.movie } }).catch((error) => {
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
