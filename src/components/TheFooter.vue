<template>
  <v-footer dark padless>
    <v-col class="text-center" cols="12">
      <v-btn v-for="link in links" :key="link" class="mx-4 white--text mb-3" icon>
        <v-icon size="24px">
          {{ link }}
        </v-icon>
      </v-btn>
      <p class="mb-0">Copyright &copy; 2021 Strovie</p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style lang="scss" scoped></style>

<style lang="scss" scoped>
p {
  font-size: 0.75rem;
  font-weight: 300;
}
</style>
