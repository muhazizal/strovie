import axios from "@/assets/global/axios-config.js";
import API_ENDPOINT from "@/assets/global/api-endpoint.js";

const movies = {
  state: () => ({
    movies: [],
  }),

  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
  },

  actions: {
    searchMovies({ commit }, movie) {
      axios
        .get(API_ENDPOINT.SEARCH_MOVIES(movie))
        .then((response) => {
          console.log(response);
          commit("SET_MOVIES", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  getters: {
    getMovies(state) {
      return state.movies;
    },
  },
};

export default movies;
