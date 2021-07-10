import { uniqBy } from "lodash";
export default {
  SET_MOVIE_DETAIL(state, payload) {
    state.movieDetail = payload;
  },
  SET_MOVIE_RECOMMENDATIONS(state, payload) {
    if (payload.page === 1) {
      state.movieRecommendations = payload;
    } else {
      state.movieRecommendations.page = payload.page;
      state.movieRecommendations.items = state.movieRecommendations.items.concat(payload.items);
      state.movieRecommendations.items = uniqBy(state.movieRecommendations.items, "id");
      state.movieRecommendations.totalPages = payload.totalPages;
      state.movieRecommendations.totalResults = payload.totalResults;
    }
  },
  SET_MOVIE_VIDEOS(state, payload) {
    state.movieVideos = payload;
  },
};
