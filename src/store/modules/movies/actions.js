import axios from "@/assets/global/axios-config.js";
import API_ENDPOINT from "@/assets/global/api-endpoint.js";

export default {
  async searchMovies({ commit }, movie) {
    try {
      const response = await axios.get(API_ENDPOINT.SEARCH_MOVIES(movie));

      if (response.status === 200) {
        commit("SET_SEARCH_MOVIES", {
          items: response.data.results,
          page: response.data.page,
          totalPages: response.data.total_pages,
          totalResults: response.data.total_results,
        });
      }
    } catch (error) {
      console.log(error);
    }

    commit("SET_LOADING", false);
  },

  async popularMovies({ commit }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_POPULAR);

      if (response.status === 200) {
        commit("SET_POPULAR_MOVIES", {
          page: response.data.page,
          totalPages: response.data.total_pages,
          totalResults: response.data.total_results,
          items: response.data.results,
        });
      }
    } catch (error) {
      console.log(error);
    }

    commit("SET_LOADING", false);
  },

  async nowPlayingMovies({ commit }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_NOW_PLAYING);

      if (response.status === 200) {
        commit("SET_NOW_PLAYING_MOVIES", {
          page: response.data.page,
          totalPages: response.data.total_pages,
          totalResults: response.data.total_results,
          items: response.data.results,
          dates: response.data.dates,
        });
      }
    } catch (error) {
      console.log(error);
    }

    commit("SET_LOADING", false);
  },

  async upcomingMovies({ commit }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_UPCOMING);

      if (response.status === 200) {
        commit("SET_UPCOMING_MOVIES", {
          page: response.data.page,
          totalPages: response.data.total_pages,
          totalResults: response.data.total_results,
          items: response.data.results,
          dates: response.data.dates,
        });
      }
    } catch (error) {
      console.log(error);
    }

    commit("SET_LOADING", false);
  },

  async topRatedMovies({ commit }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_TOP_RATED);

      if (response.status === 200) {
        commit("SET_TOP_RATED_MOVIES", {
          page: response.data.page,
          totalPages: response.data.total_pages,
          totalResults: response.data.total_results,
          items: response.data.results,
        });
      }
    } catch (error) {
      console.log(error);
    }

    commit("SET_LOADING", false);
  },
};
