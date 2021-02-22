import axios from "@/plugins/axios-config.js";
import API_ENDPOINT from "@/global/api-endpoint.js";

export default {
  async movieDetail({ commit }, movieId) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_MOVIE_DETAIL(movieId));

      if (response.status === 200) {
        commit("SET_MOVIE_DETAIL", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
