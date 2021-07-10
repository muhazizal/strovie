<template>
  <v-app>
    <navigation-container />
    <v-main>
      <v-container class="py-0 px-4 px-sm-7 px-md-3">
        <router-view :key="$route.path"></router-view>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    NavigationContainer: () => import("@/components/Navigation/NavigationContainer.vue"),
    TheFooter: () => import("@/components/TheFooter.vue"),
  },
};
</script>
<style lang="scss" scoped>
#app {
  font-family: "Montserrat", sans-serif !important;
}
.v-main {
  min-height: calc(100vh - 9.625rem);
  margin-top: 4rem;
}
</style>
