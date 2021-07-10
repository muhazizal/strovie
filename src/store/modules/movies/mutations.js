import { uniqBy } from "lodash";

export default {
  SET_SEARCH_MOVIES(state, payload) {
    if (payload.page === 1) {
      state.searchMovies = payload;
    } else {
      state.searchMovies.page = payload.page;
      state.searchMovies.items = state.searchMovies.items.concat(payload.items);
      state.searchMovies.items = uniqBy(state.searchMovies.items, "id");
      state.searchMovies.totalPages = payload.totalPages;
      state.searchMovies.totalResults = payload.totalResults;
    }
  },
  SET_POPULAR_MOVIES(state, payload) {
    if (payload.page === 1) {
      state.popularMovies = payload;
    } else {
      state.popularMovies.page = payload.page;
      state.popularMovies.items = state.popularMovies.items.concat(payload.items);
      state.popularMovies.items = uniqBy(state.popularMovies.items, "id");
      state.popularMovies.totalPages = payload.totalPages;
      state.popularMovies.totalResults = payload.totalResults;
    }
  },
  SET_NOW_PLAYING_MOVIES(state, payload) {
    if (payload.page === 1) {
      state.nowPlayingMovies = payload;
    } else {
      state.nowPlayingMovies.page = payload.page;
      state.nowPlayingMovies.items = state.nowPlayingMovies.items.concat(payload.items);
      state.nowPlayingMovies.items = uniqBy(state.nowPlayingMovies.items, "id");
      state.nowPlayingMovies.totalPages = payload.totalPages;
      state.nowPlayingMovies.totalResults = payload.totalResults;
    }
  },
  SET_UPCOMING_MOVIES(state, payload) {
    if (payload.page === 1) {
      state.upcomingMovies = payload;
    } else {
      state.upcomingMovies.page = payload.page;
      state.upcomingMovies.items = state.upcomingMovies.items.concat(payload.items);
      state.upcomingMovies.items = uniqBy(state.upcomingMovies.items, "id");
      state.upcomingMovies.totalPages = payload.totalPages;
      state.upcomingMovies.totalResults = payload.totalResults;
    }
  },
  SET_TOP_RATED_MOVIES(state, payload) {
    if (payload.page === 1) {
      state.topRatedMovies = payload;
    } else {
      state.topRatedMovies.page = payload.page;
      state.topRatedMovies.items = state.topRatedMovies.items.concat(payload.items);
      state.topRatedMovies.items = uniqBy(state.topRatedMovies.items, "id");
      state.topRatedMovies.totalPages = payload.totalPages;
      state.topRatedMovies.totalResults = payload.totalResults;
    }
  },
};
