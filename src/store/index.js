import Vue from "vue";
import Vuex from "vuex";

import movies from "./modules/movies/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },

  getters: {
    getLoading(state) {
      return state.loading;
    },
  },

  modules: {
    movies,
  },
});
