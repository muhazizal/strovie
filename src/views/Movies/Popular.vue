<template>
  <div class="popular">
    <h2 class="my-3 my-sm-5">Popular Movies</h2>
    <v-row>
      <v-col class="col-12 col-md-2">
        <movie-filters :movies="movies" />
      </v-col>
      <movie-list-skeleton v-if="loading" />
      <movie-list v-if="!loading" :movies="movies">
        <template v-slot:loading v-if="isBottomVisible && this.page < this.totalPages">
          <v-progress-circular indeterminate color="primary" class="mx-auto my-3" />
        </template>
      </movie-list>
    </v-row>
  </div>
</template>
<script>
import { bottomVisible } from "@/utils/scroll.js";
export default {
  name: "Popular",
  components: {
    MovieList: () => import("@/components/Movie/MovieList"),
    MovieFilters: () => import("@/components/Movie/MovieFilters"),
    MovieListSkeleton: () => import("@/components/Movie/MovieListSkeleton"),
  },
  data() {
    return {
      page: 1,
      totalPages: 0,
      isBottomVisible: false,
    };
  },
  computed: {
    loading() {
      return this.$store.getters["getLoading"];
    },
    movies() {
      return this.$store.getters["movies/getPopularMovies"];
    },
  },
  watch: {
    async isBottomVisible(isBottomVisible) {
      if (isBottomVisible && this.page < this.totalPages) {
        this.page += 1;
        await this.handleGetPopularMovies();
      }
    },
  },
  async created() {
    this.handleInfiniteScroll();
    await this.handleGetPopularMovies();
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
    async handleGetPopularMovies() {
      const params = {
        page: this.page,
        onSuccess: (data) => this.handleOnSuccessGetPopularMovies(data),
        onFail: (error) => this.handleOnFailGetPopularMovies(error),
      };
      await this.$store.dispatch("movies/popularMovies", params);
    },
    async handleOnSuccessGetPopularMovies(data) {
      this.totalPages = data.total_pages;
      await this.$store.commit("SET_LOADING", false);
    },
    async handleOnFailGetPopularMovies(error) {
      await this.$store.commit("SET_LOADING", false);
      console.log(error);
    },
  },
};
</script>
<style lang="scss" scoped>
.popular {
  min-height: calc(100vh - 9.625rem);
}
</style>
