const state = {
  number: 100000,
};
const getters = {
  getNumber: state => state.number
};
const actions = {
  decrementNumber({ commit }) {
    commit('DECREMENT_NUMBER');
  }
};
const mutations = {
  DECREMENT_NUMBER() {
    state.number = state.number - 1;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
