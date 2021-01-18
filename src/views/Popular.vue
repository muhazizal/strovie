<template>
  <div class="popular">
    <h2 class="my-5">Popular Movies</h2>
    <v-row>
      <v-col class="col-md-2"> </v-col>

      <PopularMovieList />
    </v-row>
  </div>
</template>

<script>
import PopularMovieList from "@/components/Popular/PopularMovieList";

export default {
  name: "Popular",

  components: {
    PopularMovieList,
  },
};
</script>

<style lang="scss" scoped>
.popular {
  min-height: calc(100vh - 9.625rem);
}
</style>
