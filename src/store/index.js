import Vuex from 'vuex';
import modules from './modules';

export default Vuex.createStore({
  state: {
    someState: false,
  },
  modules: {
    ...modules,
  },

});
