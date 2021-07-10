export default {
  SET_SEARCH_MOVIES(state, movies) {
    state.searchMovies = movies;
  },
  SET_POPULAR_MOVIES(state, movies) {
    state.popularMovies = movies;
  },
  SET_NOW_PLAYING_MOVIES(state, movies) {
    state.nowPlayingMovies = movies;
  },
  SET_UPCOMING_MOVIES(state, movies) {
    state.upcomingMovies = movies;
  },
  SET_TOP_RATED_MOVIES(state, movies) {
    state.topRatedMovies = movies;
  },
};
