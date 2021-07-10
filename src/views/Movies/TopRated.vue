<template>
  <div class="top-rated">
    <h2 class="my-5">Top Rated Movies</h2>
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
  name: "TopRated",
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
      return this.$store.getters["movies/getTopRatedMovies"];
    },
  },
  watch: {
    async isBottomVisible(isBottomVisible) {
      if (isBottomVisible) {
        this.page += 1;
        await this.handleGetTopRatedMovies();
      }
    },
  },
  async created() {
    this.handleInfiniteScroll();
    await this.handleGetTopRatedMovies();
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
    async handleGetTopRatedMovies() {
      const params = {
        page: this.page,
        onSuccess: (data) => this.handleOnSuccessGetTopRatedMovies(data),
        onFail: (error) => this.handleOnFailGetTopRatedMovies(error),
      };
      await this.$store.dispatch("movies/topRatedMovies", params);
    },
    async handleOnSuccessGetTopRatedMovies() {
      await this.$store.commit("SET_LOADING", false);
    },
    async handleOnFailGetTopRatedMovies(error) {
      await this.$store.commit("SET_LOADING", false);
      console.log(error);
    },
  },
};
</script>
<style lang="scss" scoped>
.top-rated {
  min-height: calc(100vh - 9.625rem);
}
</style>
