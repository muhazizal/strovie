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
  },
};
