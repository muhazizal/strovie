<template>
  <div class="movie">
    <v-row class="my-0 mt-3 justify-center">
      <v-col class="col-12 col-md-4 col-lg-3 col-xl-2 d-flex align-center">
        <movie-poster-skeleton v-if="loading" />
        <movie-poster v-if="!loading" :movieDetail="movieDetail" />
      </v-col>
      <v-col class="col-12 col-md-8 col-lg-6 col-xl-4 px-md-3 d-flex align-center mt-5 mt-md-0">
        <movie-overview-skeleton v-if="loading" />
        <movie-overview v-if="!loading" :movieDetail="movieDetail" />
      </v-col>
    </v-row>
    <v-row class="my-0 justify-center">
      <v-col class="col-12 mt-6 pb-0">
        <h2>Recommendations</h2>
      </v-col>
      <v-col class="col-md-2">
        <movie-filters :movies="movieRecommendations" />
      </v-col>
      <movie-list-skeleton v-if="loading" />
      <movie-list v-if="!loading" :movies="movieRecommendations">
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
  name: "Movie",
  components: {
    MoviePoster: () => import("@/components/Movie/MoviePoster"),
    MovieOverview: () => import("@/components/Movie/MovieOverview"),
    MovieList: () => import("@/components/Movie/MovieList"),
    MovieFilters: () => import("@/components/Movie/MovieFilters.vue"),
    MovieListSkeleton: () => import("@/components/Movie/MovieListSkeleton"),
    MoviePosterSkeleton: () => import("@/components/Movie/MoviePosterSkeleton"),
    MovieOverviewSkeleton: () => import("@/components/Movie/MovieOverviewSkeleton"),
  },
  data() {
    return {
      movieId: "",
      page: 1,
      totalPages: 0,
      isBottomVisible: false,
    };
  },
  computed: {
    loading() {
      return this.$store.getters["getLoading"];
    },
    movieDetail() {
      return this.$store.getters["movie/getMovieDetail"];
    },
    movieRecommendations() {
      return this.$store.getters["movie/getMovieRecommendations"];
    },
  },
  watch: {
    async isBottomVisible(isBottomVisible) {
      if (isBottomVisible && this.page < this.totalPages) {
        this.page += 1;
        await this.handleGetRecommendationsMovies(this.movieId);
      }
    },
  },
  async created() {
    this.handleInfiniteScroll();
    this.movieId = this.$route.params.id;

    if (this.movieId) {
      await this.$store.dispatch("movie/movieDetail", this.movieId);
      await this.handleGetRecommendationsMovies(this.movieId);
    }
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
    async handleGetRecommendationsMovies(movieId) {
      const params = {
        movieId,
        page: this.page,
        onSuccess: (data) => this.handleOnSuccessGetRecommendationsMovies(data),
        onFail: (error) => this.handleOnFailGetRecommendationsMovies(error),
      };
      await this.$store.dispatch("movie/movieRecommendations", params);
    },
    async handleOnSuccessGetRecommendationsMovies(data) {
      this.totalPages = data.total_pages;
      await this.$store.commit("SET_LOADING", false);
    },
    async handleOnFailGetRecommendationsMovies(error) {
      await this.$store.commit("SET_LOADING", false);
      console.log(error);
    },
  },
};
</script>
<style lang="scss" scoped>
.movie {
  min-height: calc(100vh - 9.625rem);
  display: flex;
  flex-direction: column;
}
</style>
