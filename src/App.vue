<template>
  <v-app>
    <NavigationContainer />

    <v-main>
      <v-container class="py-0 px-4 px-sm-3">
        <router-view :key="$route.path"></router-view>
      </v-container>
    </v-main>

    <TheFooter />
  </v-app>
</template>

<script>
import NavigationContainer from "@/components/Navigation/NavigationContainer.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    NavigationContainer,
    TheFooter,
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
