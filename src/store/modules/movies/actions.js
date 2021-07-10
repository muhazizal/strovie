import axios from "@/plugins/axios-config.js";
import API_ENDPOINT from "@/global/api-endpoint.js";

export default {
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
  },
  async popularMovies({ dispatch }, { page, onSuccess, onFail }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_POPULAR(page));

      dispatch("setMoviesWithoutDate", {
        mutations: "SET_POPULAR_MOVIES",
        movies: response.data,
      });

      onSuccess && onSuccess(response.data);
    } catch (error) {
      onFail && onFail(error);
    }
  },
  async nowPlayingMovies({ dispatch }, { page, onSuccess, onFail }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_NOW_PLAYING(page));

      dispatch("setMoviesWithDate", {
        mutations: "SET_NOW_PLAYING_MOVIES",
        movies: response.data,
      });

      onSuccess && onSuccess(response.data);
    } catch (error) {
      onFail && onFail(error);
    }
  },
  async upcomingMovies({ dispatch }, { page, onSuccess, onFail }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_UPCOMING(page));

      dispatch("setMoviesWithDate", {
        mutations: "SET_UPCOMING_MOVIES",
        movies: response.data,
      });

      onSuccess && onSuccess(response.data);
    } catch (error) {
      onFail && onFail(error);
    }
  },
  async topRatedMovies({ dispatch }, { page, onSuccess, onFail }) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_TOP_RATED(page));

      dispatch("setMoviesWithoutDate", {
        mutations: "SET_TOP_RATED_MOVIES",
        movies: response.data,
      });

      onSuccess && onSuccess(response.data);
    } catch (error) {
      onFail && onFail(error);
    }
  },
};
