<template>
  <form class="d-flex justify-center" @submit.prevent>
    <v-text-field
      dark
      v-model="movie"
      id="movie"
      name="movie"
      label="Search movie"
      required
      outlined
      color="accent"
      type="search"
      @keydown.enter.prevent="searchMovies"
      :error-messages="movieErrors"
      @input="$v.movie.$touch()"
      @blur="$v.movie.$touch()"
    ></v-text-field>
    <v-btn type="submit" @keypress.enter.prevent="searchMovies" @click.prevent="searchMovies" color="primary" large
      >Search</v-btn
    >
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    movie: { required },
  },

  data() {
    return {
      movie: "",
    };
  },

  computed: {
    movieErrors() {
      const errors = [];
      if (!this.$v.movie.$dirty) return errors;
      !this.$v.movie.required && errors.push("Title is required");
      return errors;
    },
  },

  methods: {
    searchMovies() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("Search Movies Error");
      } else {
        const movie = this.movie;
        this.$store.dispatch("movies/searchMovies", movie);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  .v-text-field {
    max-width: 31.25rem;
    margin-right: 0.75rem;
  }

  .v-btn {
    height: 56px !important;
  }
}
</style>
