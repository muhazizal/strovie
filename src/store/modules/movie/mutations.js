export default {
  SET_MOVIE_DETAIL(state, payload) {
    state.movieDetail = payload;
  },
  SET_MOVIE_RECOMMENDATIONS(state, payload) {
    state.movieRecommendations = payload;
  },
  SET_MOVIE_VIDEOS(state, payload) {
    state.movieVideos = payload;
  },
};
