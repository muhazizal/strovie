export default {
  SET_MOVIES(state, movies) {
    state.movies.page = movies.page;
    state.movies.totalPages = movies.totalPages;
    state.movies.totalResults = movies.totalResults;
    state.movies.items.push(movies.items);
  },
};
