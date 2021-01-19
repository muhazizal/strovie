<template>
  <v-app-bar fixed elevate-on-scroll>
    <v-container class="d-flex align-center pa-0 pa-sm-3">
      <router-link to="/" class="text-decoration-none">
        <v-toolbar-title class="pl-md-0">Strovie</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="d-none d-md-inline-flex">
            Movies
          </v-btn>
        </template>
        <v-list nav dense>
          <router-link v-for="(movie, i) in movies" :key="i" :to="movie.destination" class="text-decoration-none">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="movie.category"> </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </v-menu>

      <router-link to="/favorites" class="text-decoration-none d-none d-md-inline-flex">
        <v-btn>
          Favorites
        </v-btn>
      </router-link>

      <v-switch v-model="$vuetify.theme.dark" dark inset hide-details class="ml-3 d-none d-md-flex"></v-switch>

      <v-app-bar-nav-icon @click="$emit('toggleDrawer')" color="white" class="d-md-none"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavigationBar",

  props: {
    movies: Array,
  },
};
</script>
