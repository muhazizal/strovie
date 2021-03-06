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
  movieRecommendations: async ({ commit }, { movieId, page, onSuccess, onFail }) => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_MOVIE_RECOMMENDATIONS(movieId, page));

      if (response.status === 200) {
        commit("SET_MOVIE_RECOMMENDATIONS", {
          page: response.data.page,
          items: response.data.results,
          totalPages: response.data.total_pages,
          totalResults: response.data.total_results,
        });

        onSuccess && onSuccess(response.data);
      }
    } catch (error) {
      onFail && onFail(error);
    }
  },
  movieVideos: async ({ commit }, movieId) => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_MOVIE_VIDEOS(movieId));

      if (response.status === 200) {
        commit("SET_MOVIE_VIDEOS", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
