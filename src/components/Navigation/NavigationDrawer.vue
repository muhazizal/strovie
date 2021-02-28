<template>
  <v-navigation-drawer v-model="drawer" app temporary stateless width="100%">
    <v-row class="ma-0">
      <v-icon class="ml-3 mt-4" @click="$emit('toggleDrawer')">
        mdi-close
      </v-icon>

      <v-spacer></v-spacer>

      <v-switch v-model="$vuetify.theme.dark" inset hide-details class="mr-2 d-md-none"></v-switch>
    </v-row>

    <FormSearchMovie :inDrawer="true" @toggleDrawer="$emit('toggleDrawer')" :drawer="drawer" />

    <v-menu offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="ml-4 mt-4 d-block">
          Movies
        </v-btn>
      </template>
      <v-list nav dense>
        <router-link v-for="(movie, i) in movies" :key="i" :to="movie.destination" class="text-decoration-none">
          <v-list-item @click="$emit('toggleDrawer')">
            <v-list-item-content>
              <v-list-item-title v-text="movie.category"> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-menu>

    <router-link to="/favorites" class="text-decoration-none">
      <v-btn class="ml-4 mt-4" @click="$emit('toggleDrawer')">
        Favorites
      </v-btn>
    </router-link>
  </v-navigation-drawer>
</template>

<script>
import FormSearchMovie from "../Form/FormSearchMovie.vue";

export default {
  name: "NavigationDrawer",

  components: { FormSearchMovie },

  props: {
    drawer: Boolean,
    movies: Array,
  },
};
</script>

<style lang="scss" scoped>
.theme--light.v-navigation-drawer {
  background-color: #f5f5f5 !important;
}

.theme--dark.v-btn.v-btn--has-bg {
  background-color: #363636 !important;
}
</style>
