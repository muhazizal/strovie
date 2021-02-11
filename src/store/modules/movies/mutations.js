export default {
  SET_SEARCH_MOVIES(state, movies) {
    state.searchMovies.items.splice(0, state.searchMovies.items.length, movies.items);
    state.searchMovies.page = movies.page;
    state.searchMovies.totalPages = movies.totalPages;
    state.searchMovies.totalResults = movies.totalResults;
  },

  SET_POPULAR_MOVIES(state, movies) {
    state.popularMovies.items.splice(0, state.popularMovies.items.length, movies.items);
    state.popularMovies.page = movies.page;
    state.popularMovies.totalPages = movies.totalPages;
    state.popularMovies.totalResults = movies.totalResults;
  },

  SET_NOW_PLAYING_MOVIES(state, movies) {
    state.nowPlayingMovies.items.splice(0, state.nowPlayingMovies.items.length, movies.items);
    state.nowPlayingMovies.page = movies.page;
    state.nowPlayingMovies.totalPages = movies.totalPages;
    state.nowPlayingMovies.totalResults = movies.totalResults;
    state.nowPlayingMovies.dates.minimum = movies.dates.minimum;
    state.nowPlayingMovies.dates.maximum = movies.dates.maximum;
  },

  SET_UPCOMING_MOVIES(state, movies) {
    state.upcomingMovies.items.splice(0, state.upcomingMovies.items.length, movies.items);
    state.upcomingMovies.page = movies.page;
    state.upcomingMovies.totalPages = movies.totalPages;
    state.upcomingMovies.totalResults = movies.totalResults;
    state.upcomingMovies.dates.minimum = movies.dates.minimum;
    state.upcomingMovies.dates.maximum = movies.dates.maximum;
  },

  SET_TOP_RATED_MOVIES(state, movies) {
    state.topRatedMovies.items.splice(0, state.topRatedMovies.items.length, movies.items);
    state.topRatedMovies.page = movies.page;
    state.topRatedMovies.totalPages = movies.totalPages;
    state.topRatedMovies.totalResults = movies.totalResults;
  },
};
