<template>
  <div class="upcoming">
    <h2 class="mt-5 mb-1">Upcoming Movies</h2>
    <v-skeleton-loader v-if="loading" max-width="150" type="text"></v-skeleton-loader>
    <p v-if="!loading" class="grey--text">{{ movies.dateMinimum }} - {{ movies.dateMaximum }}</p>
    <v-row>
      <v-col class="col-md-2">
        <movie-filters :movies="movies" />
      </v-col>
      <movie-list-skeleton v-if="loading" />
      <movie-list v-if="!loading" :movies="movies">
        <template v-slot:loading v-if="isBottomVisible">
          <v-progress-circular indeterminate color="primary" class="mx-auto my-3" />
        </template>
      </movie-list>
    </v-row>
  </div>
</template>
<script>
import { bottomVisible } from "@/utils/scroll.js";
export default {
  name: "Upcoming",
  components: {
    MovieList: () => import("@/components/Movie/MovieList"),
    MovieFilters: () => import("@/components/Movie/MovieFilters.vue"),
    MovieListSkeleton: () => import("@/components/Movie/MovieListSkeleton"),
  },
  data() {
    return {
      page: 1,
      isBottomVisible: false,
    };
  },
  computed: {
    loading() {
      return this.$store.getters["getLoading"];
    },
    movies() {
      return this.$store.getters["movies/getUpcomingMovies"];
    },
  },
  watch: {
    async isBottomVisible(isBottomVisible) {
      if (isBottomVisible) {
        this.page += 1;
        await this.handleGetUpcomingMovies();
      }
    },
  },
  async created() {
    this.handleInfiniteScroll();
    await this.handleGetUpcomingMovies();
  },
  destroyed() {
    this.$store.commit("SET_LOADING", true);
  },
  methods: {
    handleInfiniteScroll() {
      window.addEventListener("scroll", () => {
        this.isBottomVisible = bottomVisible();
      });
    },
    async handleGetUpcomingMovies() {
      const params = {
        page: this.page,
        onSuccess: (data) => this.handleOnSuccessGetUpcomingMovies(data),
        onFail: (error) => this.handleOnFailGetUpcomingMovies(error),
      };
      await this.$store.dispatch("movies/upcomingMovies", params);
    },
    async handleOnSuccessGetUpcomingMovies() {
      await this.$store.commit("SET_LOADING", false);
    },
    async handleOnFailGetUpcomingMovies(error) {
      await this.$store.commit("SET_LOADING", false);
      console.log(error);
    },
  },
};
</script>

<style lang="scss" scoped>
.upcoming {
  min-height: calc(100vh - 9.625rem);
  p {
    font-size: 0.875em;
  }
}
</style>
