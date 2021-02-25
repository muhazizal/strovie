<template>
  <div>
    <NavigationBar @toggleDrawer="drawer = !drawer" :movies="movies" />
    <NavigationDrawer @toggleDrawer="drawer = !drawer" :drawer="drawer" :movies="movies" />
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
import NavigationDrawer from "./NavigationDrawer";

export default {
  name: "NavigationContainer",

  components: {
    NavigationBar,
    NavigationDrawer,
  },

  data: () => ({
    drawer: null,
    movies: [
      { category: "Popular", destination: "/popular" },
      { category: "Now Playing", destination: "/now-playing" },
      { category: "Upcoming", destination: "/upcoming" },
      { category: "Top Rated", destination: "/top-rated" },
    ],
  }),
};
</script>

<style lang="scss">
.v-list-item.theme--dark:hover {
  border-bottom: 1px solid $primary-dark;
  border-top: 1px solid $primary-dark;
}

.v-list-item.theme--light:hover {
  border-bottom: 1px solid $primary-dark;
  border-top: 1px solid $primary-dark;
}

.router-link-active .v-btn.theme--dark,
.router-link-active .theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: $primary-dark !important;
}

.router-link-active .v-btn.theme--light,
.router-link-active .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: $primary-light !important;
}

.router-link-active[href="/favorites"] .v-btn.theme--light,
.router-link-active[href="/favorites"] .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: $primary-light !important;
}

.v-btn {
  box-shadow: none;
}

@media screen and (max-width: 600px) {
  .v-menu__content {
    top: 1rem !important;
  }
}
</style>
