<template>
  <div>
    <v-app-bar fixed elevate-on-scroll>
      <v-container class="d-flex align-center pa-0 pa-sm-3">
        <router-link to="/" class="text-decoration-none">
          <v-toolbar-title class="pl-md-0">Strovie</v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <v-app-bar-nav-icon @click="drawer = true" class="d-md-none"></v-app-bar-nav-icon>

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
          <v-btn active-class="">
            Favorites
          </v-btn>
        </router-link>

        <v-switch v-model="$vuetify.theme.dark" dark inset hide-details class="ml-3"></v-switch>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-menu offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="ml-4 mt-4 d-block">
            Movies
          </v-btn>
        </template>
        <v-list nav dense>
          <router-link v-for="(movie, i) in movies" :key="i" :to="movie.destination" class="text-decoration-none">
            <v-list-item @click="drawer = false">
              <v-list-item-content>
                <v-list-item-title v-text="movie.category"> </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </v-menu>

      <router-link to="/favorites" class="text-decoration-none">
        <v-btn class="ml-4 mt-4" @click="drawer = false">
          Favorites
        </v-btn>
      </router-link>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    drawer: false,
    movies: [
      { category: "Popular", destination: "/popular" },
      { category: "Now Playing", destination: "/now-playing" },
      { category: "Upcoming", destination: "/upcoming" },
      { category: "Top Rated", destination: "/top-rated" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.router-link-active .v-btn.theme--dark,
.router-link-active .theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: $primary-dark !important;
}

.router-link-active .v-btn.theme--light,
.router-link-active .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: $primary-light !important;
}

.v-btn {
  box-shadow: none;
}

header {
  .v-toolbar__title {
    padding: 0.813rem 0;
    color: white !important;
  }
}

.theme--light.v-app-bar.v-toolbar.v-sheet,
.theme--light.v-btn.v-btn--has-bg {
  background-color: #212121;
  color: white;
}

@media screen and (max-width: 600px) {
  .v-menu__content {
    top: 1rem !important;
  }
}
</style>
