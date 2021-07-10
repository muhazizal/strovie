<template>
  <div class="now-playing">
    <h2 class="mt-5 mb-1">Now Playing Movies</h2>
    <v-skeleton-loader v-if="loading" max-width="150" type="text"></v-skeleton-loader>
    <p v-if="!loading" class="grey--text">{{ movies.dateMinimum }} - {{ movies.dateMaximum }}</p>
    <v-row>
      <v-col class="col-md-2">
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
  name: "NowPlaying",
  components: {
    MovieList: () => import("@/components/Movie/MovieList"),
    MovieFilters: () => import("@/components/Movie/MovieFilters.vue"),
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
      return this.$store.getters["movies/getNowPlayingMovies"];
    },
  },
  watch: {
    async isBottomVisible(isBottomVisible) {
      if (isBottomVisible && this.page < this.totalPages) {
        this.page += 1;
        await this.handleGetNowPlayingMovies();
      }
    },
  },
  async created() {
    this.handleInfiniteScroll();
    await this.handleGetNowPlayingMovies();
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
    async handleGetNowPlayingMovies() {
      const params = {
        page: this.page,
        onSuccess: (data) => this.handleOnSuccessGetNowPlayingMovies(data),
        onFail: (error) => this.handleOnFailGetNowPlayingMovies(error),
      };
      await this.$store.dispatch("movies/nowPlayingMovies", params);
    },
    async handleOnSuccessGetNowPlayingMovies(data) {
      this.totalPages = data.total_pages;
      await this.$store.commit("SET_LOADING", false);
    },
    async handleOnFailGetNowPlayingMovies(error) {
      await this.$store.commit("SET_LOADING", false);
      console.log(error);
    },
  },
};
</script>
<style lang="scss" scoped>
.now-playing {
  min-height: calc(100vh - 9.625rem);
  p {
    font-size: 0.875em;
  }
}
</style>
