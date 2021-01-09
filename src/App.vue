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
import axios from "@/assets/global/axios-config.js";
import API_ENDPOINT from "@/assets/global/api-endpoint.js";

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

  mounted() {
    axios
      .get(`${API_ENDPOINT.GET_POPULAR}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Montserrat", sans-serif;
}

.v-main {
  min-height: calc(100vh - 9.125rem);
  margin-top: 3.5rem;
}
</style>
