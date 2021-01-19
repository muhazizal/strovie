<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container class="py-0">
        <router-view></router-view>
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    Navigation,
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
