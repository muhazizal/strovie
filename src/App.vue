<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <v-container class="py-0">
        <router-view></router-view>
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    TheNavigation,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Montserrat", sans-serif;
}

.v-main {
  min-height: calc(100vh - 9.625rem);
  margin-top: 4rem;
}
</style>
