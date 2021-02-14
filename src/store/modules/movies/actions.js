import axios from "@/assets/global/axios-config.js";
import API_ENDPOINT from "@/assets/global/api-endpoint.js";

export default {
  setLoading({ commit }) {
    commit("SET_LOADING", false, { root: true });
  },

  setMoviesWithoutDate({ commit }, data) {
    commit(`${data.mutations}`, {
      page: data.movies.page,
      items: data.movies.results,
      totalPages: data.movies.total_pages,
      totalResults: data.movies.total_results,
    });
  },

  setMoviesWithDate({ commit }, data) {
    commit(`${data.mutations}`, {
      page: data.movies.page,
      items: data.movies.results,
      totalPages: data.movies.total_pages,
      totalResults: data.movies.total_results,
      dateMinimum: data.movies.dates.minimum,
      dateMaximum: data.movies.dates.maximum,
    });
  },

  async searchMovies({ dispatch }, movie) {
    try {
      const response = await axios.get(API_ENDPOINT.SEARCH_MOVIES(movie));

      dispatch("setMoviesWithoutDate", {
        mutations: "SET_SEARCH_MOVIES",
        movies: response.data,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch("setLoading");
  },

  async popularMovies({ dispatch }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_POPULAR);

      dispatch("setMoviesWithoutDate", {
        mutations: "SET_POPULAR_MOVIES",
        movies: response.data,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch("setLoading");
  },

  async nowPlayingMovies({ dispatch }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_NOW_PLAYING);

      dispatch("setMoviesWithDate", {
        mutations: "SET_NOW_PLAYING_MOVIES",
        movies: response.data,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch("setLoading");
  },

  async upcomingMovies({ dispatch }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_UPCOMING);

      dispatch("setMoviesWithDate", {
        mutations: "SET_UPCOMING_MOVIES",
        movies: response.data,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch("setLoading");
  },

  async topRatedMovies({ dispatch }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_TOP_RATED);

      dispatch("setMoviesWithoutDate", {
        mutations: "SET_TOP_RATED_MOVIES",
        movies: response.data,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch("setLoading");
  },
};
