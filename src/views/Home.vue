<template>
  <div class="home d-flex flex-column justify-center text-center">
    <h1>Welcome to Strovie.</h1>
    <p class="mb-10">Discover millions of movies.</p>
    <FormSearchMovie />
  </div>
</template>

<script>
import FormSearchMovie from "@/components/Form/FormSearchMovie.vue";

export default {
  name: "Home",

  components: {
    FormSearchMovie,
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 9.625rem);

  h1 {
    line-height: 2.5rem;
    margin-bottom: 0.75rem;
  }
}
</style>
