<template>
  <div>
    <v-app-bar fixed dark>
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = true" class="d-md-none"></v-app-bar-nav-icon>

        <v-toolbar-title class="pl-md-0">Strovie</v-toolbar-title>

        <v-spacer></v-spacer>

        <router-link to="/movies" class="text-decoration-none">
          Movies
        </router-link>

        <router-link to="/favorite" class="text-decoration-none ml-md-3">
          Favorite
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
  }),
};
</script>

<style lang="scss" scoped>
header {
  .v-btn {
    box-shadow: none;
  }

  a {
    color: #fff;
    padding: 0.5rem 0.75rem;
    border-radius: 0.313rem;
    transition: all 0.15s;

    &:hover {
      background-color: rgba($color: #fff, $alpha: 0.1);
    }

    &:active {
      background-color: inherit;
      transition: 0ms;
    }

    &.router-link-active {
      color: $primary;
    }
  }
}
</style>
