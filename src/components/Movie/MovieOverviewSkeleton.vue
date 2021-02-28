<template>
  <div>
    <v-skeleton-loader type="heading"></v-skeleton-loader>
    <v-skeleton-loader class="mt-2" type="text"></v-skeleton-loader>

    <v-skeleton-loader class="mt-4" type="sentences"></v-skeleton-loader>

    <v-skeleton-loader class="mt-4" type="heading"></v-skeleton-loader>
    <div class="d-flex">
      <v-skeleton-loader class="mt-2 mr-2" type="chip"></v-skeleton-loader>
      <v-skeleton-loader class="mt-2 mr-2" type="chip"></v-skeleton-loader>
      <v-skeleton-loader class="mt-2 mr-2" type="chip"></v-skeleton-loader>
    </div>

    <v-skeleton-loader class="mt-5" type="heading"></v-skeleton-loader>
    <v-skeleton-loader class="mt-2" type="paragraph"></v-skeleton-loader>

    <div class="d-flex mt-4">
      <v-skeleton-loader class="mt-2 mr-2" type="chip"></v-skeleton-loader>
      <v-skeleton-loader class="mt-2 mr-2" type="chip"></v-skeleton-loader>
      <v-skeleton-loader class="mt-2 mr-2" type="chip"></v-skeleton-loader>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieOverviewSkeleton",
};
</script>
