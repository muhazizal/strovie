<template>
  <v-skeleton-loader class="mx-auto" width="100%" :max-width="maxWidth" :type="imageType" />
</template>
<script>
export default {
  name: "MoviePosterSkeleton",
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 250;
        case "sm":
          return 350;
        case "md":
          return 350;
        case "lg":
          return 350;
        case "xl":
          return 400;
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    imageType() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "image, image";
        case "sm":
          return "image, image";
        case "md":
          return "image, image";
        case "lg":
          return "image, image";
        case "xl":
          return "image, image, image";
      }
    },
  },
};
</script>
