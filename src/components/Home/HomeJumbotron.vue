<template>
  <div class="jumbotron d-flex flex-column justify-center text-center">
    <h1>Welcome to Strovie.</h1>
    <p class="mb-10">Discover millions of movies.</p>
    <HomeJumbotronForm />
  </div>
</template>

<script>
import HomeJumbotronForm from "./HomeJumbotronForm";

export default {
  name: "HomeJumbotron",

  components: {
    HomeJumbotronForm,
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  min-height: calc(100vh - 9.125rem);

  h1 {
    line-height: 2.5rem;
    margin-bottom: 0.75rem;
  }
}
</style>
