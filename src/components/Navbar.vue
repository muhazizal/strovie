<template>
  <div>
    <v-app-bar fixed dark>
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = true" class="d-md-none"></v-app-bar-nav-icon>

        <router-link to="/" class="text-decoration-none white--text">
          <v-toolbar-title class="pl-md-0">Strovie</v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              Movies
            </v-btn>
          </template>
          <v-list nav dense dark>
            <router-link
              v-for="(movie, i) in movies"
              :key="i"
              :to="movie.destination"
              class="text-decoration-none white--text"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="movie.category"> </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list>
        </v-menu>

        <router-link to="/favorites" class="text-decoration-none">
          <v-btn>
            Favorites
          </v-btn>
        </router-link>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
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
header {
  .v-btn {
    box-shadow: none;
  }
}

.v-list {
  &-item {
    color: #fff;
    transition: all 0.15s;

    &:hover {
      background-color: rgba($color: #fff, $alpha: 0.1);
    }
  }
}
</style>
