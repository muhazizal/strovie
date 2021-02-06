import axios from "@/assets/global/axios-config.js";
import API_ENDPOINT from "@/assets/global/api-endpoint.js";

export default {
  searchMovies({ commit, state }, movie) {
    axios
      .get(API_ENDPOINT.SEARCH_MOVIES(movie))
      .then((response) => {
        if (response.status === 200) {
          if (state.popularMovies.page === response.data.page) {
            return;
          }

          commit("SET_SEARCH_MOVIES", {
            items: response.data.results,
            page: response.data.page,
            totalPages: response.data.total_pages,
            totalResults: response.data.total_results,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  popularMovies({ state, commit }) {
    axios
      .get(API_ENDPOINT.GET_POPULAR)
      .then((response) => {
        if (response.status === 200) {
          if (state.popularMovies.page === response.data.page) {
            return;
          }

          commit("SET_POPULAR_MOVIES", {
            page: response.data.page,
            totalPages: response.data.total_pages,
            totalResults: response.data.total_results,
            items: response.data.results,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  nowPlayingMovies({ state, commit }) {
    axios
      .get(API_ENDPOINT.GET_NOW_PLAYING)
      .then((response) => {
        if (response.status === 200) {
          if (state.nowPlayingMovies.page === response.data.page) {
            return;
          }

          commit("SET_NOW_PLAYING_MOVIES", {
            page: response.data.page,
            totalPages: response.data.total_pages,
            totalResults: response.data.total_results,
            items: response.data.results,
            dates: response.data.dates,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  upcomingMovies({ state, commit }) {
    axios
      .get(API_ENDPOINT.GET_UPCOMING)
      .then((response) => {
        if (response.status === 200) {
          if (state.upcomingMovies.page === response.data.page) {
            return;
          }

          commit("SET_UPCOMING_MOVIES", {
            page: response.data.page,
            totalPages: response.data.total_pages,
            totalResults: response.data.total_results,
            items: response.data.results,
            dates: response.data.dates,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  topRatedMovies({ state, commit }) {
    axios
      .get(API_ENDPOINT.GET_TOP_RATED)
      .then((response) => {
        if (response.status === 200) {
          if (state.topRatedMovies.page === response.data.page) {
            return;
          }

          commit("SET_TOP_RATED_MOVIES", {
            page: response.data.page,
            totalPages: response.data.total_pages,
            totalResults: response.data.total_results,
            items: response.data.results,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
