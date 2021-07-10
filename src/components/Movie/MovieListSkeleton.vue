<template>
  <v-col class="col-12 col-md-10">
    <v-row class="ma-0 mb-5 justify-center justify-sm-start">
      <v-col class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-0 px-sm-3 px-xl-0 mx-xl-5" v-for="n in 20" :key="n">
        <v-skeleton-loader
          class="mx-auto mb-6"
          max-width="300"
          type="image, list-item-two-line, list-item"
          elevation="1"
        />
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "MovieListSkeleton",
};
</script>
