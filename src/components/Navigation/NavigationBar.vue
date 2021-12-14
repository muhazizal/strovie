<template>
  <v-app-bar fixed elevate-on-scroll>
    <v-container class="d-flex align-center pa-0 pa-sm-3">
      <v-row>
        <v-col class="col-12 col-md-2 d-flex  align-center">
          <v-toolbar-title class="pl-md-0">Strovie</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click="$emit('toggleDrawer')" class="d-md-none"></v-app-bar-nav-icon>
        </v-col>
        <v-col class="col-md-10 d-none d-md-block pa-0">
          <v-row class="d-flex align-center my-3 ml-3 mr-0 pr-xl-14 pl-md-3">
            <form-search class="d-none d-md-block" />
            <v-spacer></v-spacer>
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" text class="d-none d-md-inline-flex mr-3">
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
            <!-- <router-link to="/favorites" class="text-decoration-none d-none d-md-inline-flex">
              <v-btn text class="mr-3">
                Favorites
              </v-btn>
            </router-link> -->
            <v-switch v-model="$vuetify.theme.dark" inset hide-details class="ml-3 d-none d-md-flex"></v-switch>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: 'NavigationBar',
  components: {
    FormSearch: () => import('@/components/Form/FormSearch.vue'),
  },
  props: {
    movies: Array,
  },
}
</script>
