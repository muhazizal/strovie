<template>
  <v-app>
    <TheNavbar />
    <v-main>
      <v-container class="py-0">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "@/assets/global/axios-config.js";
import API_ENDPOINT from "@/assets/global/api-endpoint.js";

import TheNavbar from "@/components/TheNavbar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    TheNavbar,
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
  background-color: #272727;
  color: #fff;
}
</style>
