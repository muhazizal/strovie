<template>
  <v-navigation-drawer v-model="drawer" absolute temporary stateless>
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
export default {
  name: "NavigationDrawer",

  props: {
    drawer: Boolean,
    movies: Array,
  },
};
</script>
