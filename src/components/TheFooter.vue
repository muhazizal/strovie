<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      <v-btn v-for="link in links" :key="link" class="mx-4 mb-3" icon>
        <v-icon size="24px">
          {{ link }}
        </v-icon>
      </v-btn>
      <p class="mb-0">
        Copyright &copy; 2021 Strovie - Created by
        <a href="https://www.linkedin.com/in/muhamad-aziz-al-asaad/" target="_blank" rel="noreferrer noopener">
          Muhazizal
        </a>
      </p>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: "TheFooter",
  data: () => ({
    links: ["mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style lang="scss" scoped>
p {
  font-size: 0.75rem;
  font-weight: 300;
  a {
    text-decoration: none;
  }
  .router-link-active .v-btn.theme--dark,
  .router-link-active .theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: $primary-dark !important;
  }
  .router-link-active .v-btn.theme--light,
  .router-link-active .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: $primary-light !important;
  }
}
</style>
