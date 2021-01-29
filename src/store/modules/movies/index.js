import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  namespaced: true,
  state: {
    searchMovies: {
      page: null,
      totalPages: null,
      totalResults: null,
      items: [],
    },
    popularMovies: {
      page: null,
      totalPages: null,
      totalResults: null,
      items: [],
    },
    nowPlayingMovies: {
      page: null,
      totalPages: null,
      totalResults: null,
      items: [],
      dates: {
        maximum: null,
        minimum: null,
      },
    },
    upcomingMovies: {
      page: null,
      totalPages: null,
      totalResults: null,
      items: [],
      dates: {
        maximum: null,
        minimum: null,
      },
    },
    topRatedMovies: {
      page: null,
      totalPages: null,
      totalResults: null,
      items: [],
    },
  },
  mutations,
  actions,
  getters,
};
