<template>
  <div class="search">
    <p class="mt-5 mb-0 movie-title">{{ this.$route.query.title }}</p>
    <h2>Search Results</h2>
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
  name: "Search",
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
      return this.$store.getters["movies/getSearchMovies"];
    },
  },
  watch: {
    async isBottomVisible(isBottomVisible) {
      if (isBottomVisible && this.page < this.totalPages) {
        this.page += 1;
        await this.handleSearchMovies();
      }
    },
  },
  async created() {
    this.handleInfiniteScroll();
    await this.handleSearchMovies();
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
    async handleSearchMovies() {
      const title = this.$route.query.title;
      const params = {
        query: title,
        page: this.page,
        onSuccess: (data) => this.handleOnSuccessSearchMovies(data),
        onFail: (error) => this.handleOnFailSearchMovies(error),
      };

      if (params.query) {
        await this.$store.dispatch("movies/searchMovies", params);
      }
    },
    async handleOnSuccessSearchMovies(data) {
      this.totalPages = data.total_pages;
      await this.$store.commit("SET_LOADING", false);
    },
    async handleOnFailSearchMovies(error) {
      await this.$store.commit("SET_LOADING", false);
      console.log(error);
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  min-height: calc(100vh - 9.625rem);
  .movie-title {
    font-size: 1.5em;
    font-weight: 300;
    text-transform: uppercase;
  }
  &-form {
    text-align: end;
  }
  h2 {
    font-size: 1em;
  }
}
</style>
