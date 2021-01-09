import mutations from "./mutations";
import getters from "./getters";
import actions from "./action";

export default {
  namespaced: true,
  state: () => ({
    movies: [],
  }),
  mutations,
  actions,
  getters,
};
