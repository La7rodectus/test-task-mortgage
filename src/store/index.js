import Vuex from 'vuex';
import modules from './modules';



export default Vuex.createStore({
  state: {
    counter: 0,
  },
  modules: {
    ...modules,
  },

});
