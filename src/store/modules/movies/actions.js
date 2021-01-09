import axios from "@/assets/global/axios-config.js";
import API_ENDPOINT from "@/assets/global/api-endpoint.js";

export default {
  searchMovies({ commit }, movie) {
    axios
      .get(API_ENDPOINT.SEARCH_MOVIES(movie))
      .then((response) => {
        console.log(response);
        commit("SET_MOVIES", response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  popularMovies({ commit }) {
    axios
      .get(API_ENDPOINT.GET_POPULAR)
      .then((response) => {
        if (response.status === 200) {
          commit("SET_MOVIES", {
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
