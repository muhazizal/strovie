<template>
  <div class="jumbotron d-flex flex-column justify-center text-center">
    <h1>Welcome to Strovie.</h1>
    <p class="mb-10">Discover millions of movies.</p>

    <form>
      <v-text-field
        dark
        v-model="movie"
        id="movie"
        name="movie"
        label="Search your favorite movie"
        required
        outlined
        color="accent"
        :error-messages="movieErrors"
        @input="$v.movie.$touch()"
        @blur="$v.movie.$touch()"
      ></v-text-field>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "HomeJumbotron",

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
};
</script>

<style lang="scss" scoped>
.jumbotron {
  height: calc(100vh - 3.5rem);
  margin-top: 3.5rem;

  h1 {
    line-height: 2.5rem;
    margin-bottom: 0.75rem;
  }
}
</style>
