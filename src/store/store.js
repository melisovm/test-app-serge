import Vue from 'vue';
import Vuex from 'vuex';

import number_operations from './modules/number_operations';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    number_operations
  }
});
