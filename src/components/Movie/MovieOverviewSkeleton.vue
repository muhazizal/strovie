<template>
  <div>
    <v-skeleton-loader type="heading" />
    <v-skeleton-loader class="mt-2" type="text" />
    <v-skeleton-loader class="mt-4" type="sentences" />
    <v-skeleton-loader class="mt-4" type="heading" />
    <div class="d-flex">
      <v-skeleton-loader class="mt-2 mr-2" type="chip" />
      <v-skeleton-loader class="mt-2 mr-2" type="chip" />
      <v-skeleton-loader class="mt-2 mr-2" type="chip" />
    </div>
    <v-skeleton-loader class="mt-5" type="heading" />
    <v-skeleton-loader class="mt-2" type="paragraph" />
    <div class="d-flex mt-4">
      <v-skeleton-loader class="mt-2 mr-2" type="chip" />
      <v-skeleton-loader class="mt-2 mr-2" type="chip" />
      <v-skeleton-loader class="mt-2 mr-2" type="chip" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieOverviewSkeleton",
};
</script>
