<template>
  <form class="d-flex justify-center" @submit.prevent>
    <v-theme-provider root>
      <v-text-field
        v-model="movie"
        id="movie"
        name="movie"
        label="Search movie"
        dense
        outlined
        clearable
        type="search"
        prepend-inner-icon="mdi-magnify"
        @keydown.enter.prevent="searchMovies"
        hide-details="auto"
        @input="$v.movie.$touch()"
      ></v-text-field>
    </v-theme-provider>
  </form>
</template>

<script>
import router from "@/router/index";

export default {
  name: "FormSearchMovie",
  data() {
    return {
      movie: "",
    };
  },

  computed: {},

  methods: {
    async searchMovies() {
      if (!this.movie) {
        return;
      }

      await this.$store.dispatch("movies/searchMovies", this.movie);
      router.push({ path: "/search", query: { title: this.movie } }).catch((error) => {
        return error;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  max-width: 25rem;
}
</style>
