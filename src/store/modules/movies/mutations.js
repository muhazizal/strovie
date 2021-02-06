export default {
  SET_LOADING(state, payload) {
    state.loading = payload;
  },

  SET_SEARCH_MOVIES(state, movies) {
    state.searchMovies.items.push(movies.items);
    state.searchMovies.page = movies.page;
    state.searchMovies.totalPages = movies.totalPages;
    state.searchMovies.totalResults = movies.totalResults;
  },

  SET_POPULAR_MOVIES(state, movies) {
    state.popularMovies.items.push(movies.items);
    state.popularMovies.page = movies.page;
    state.popularMovies.totalPages = movies.totalPages;
    state.popularMovies.totalResults = movies.totalResults;
  },

  SET_NOW_PLAYING_MOVIES(state, movies) {
    state.nowPlayingMovies.items.push(movies.items);
    state.nowPlayingMovies.page = movies.page;
    state.nowPlayingMovies.totalPages = movies.totalPages;
    state.nowPlayingMovies.totalResults = movies.totalResults;
    state.nowPlayingMovies.dates.minimum = movies.dates.minimum;
    state.nowPlayingMovies.dates.maximum = movies.dates.maximum;
  },

  SET_UPCOMING_MOVIES(state, movies) {
    state.upcomingMovies.items.push(movies.items);
    state.upcomingMovies.page = movies.page;
    state.upcomingMovies.totalPages = movies.totalPages;
    state.upcomingMovies.totalResults = movies.totalResults;
    state.upcomingMovies.dates.minimum = movies.dates.minimum;
    state.upcomingMovies.dates.maximum = movies.dates.maximum;
  },

  SET_TOP_RATED_MOVIES(state, movies) {
    state.topRatedMovies.items.push(movies.items);
    state.topRatedMovies.page = movies.page;
    state.topRatedMovies.totalPages = movies.totalPages;
    state.topRatedMovies.totalResults = movies.totalResults;
  },
};
