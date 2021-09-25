const getJson = require('../../utils/getJson.js').default;

export default {
  state: {
    banks: [],
  },
  getters: {
    getBanks: (state) => state.banks,
  },
  actions: {
    fetchBanks: ({ commit }) => new Promise((resolve, reject) => {
      // getJson('http://localhost:7070/getBanks').then((banks) => {
      //   commit('updateBanks', banks);
      //   resolve();
      // }).catch((err) => reject(err));
      getJson('http://localhost:7070/isUniqueBankName?argName').then((banks) => {
        commit('updateBanks', banks);
        resolve();
      }).catch((err) => reject(err));
    }),

  },
  mutations: {
    updateBanks(state, banks) {
      state.banks = banks;
    },
  },
};
