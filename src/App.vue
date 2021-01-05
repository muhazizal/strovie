<template>
  <v-app>
    <navbar-app />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import axios from "@/assets/global/axios-config.js";
import API_ENDPOINT from "@/assets/global/api-endpoint.js";

import NavbarApp from "@/components/Navbar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    "navbar-app": NavbarApp,
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
</style>
