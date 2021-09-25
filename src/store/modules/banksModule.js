const wdo = require('../../utils/wdo.js');

export default {
  state: {
    banks: {},
    banksLoaded: false,
  },
  getters: {
    getBanks: (state) => state.banks,
    getBankByName: (state) => (name) => state.banks[name],
  },
  mutations: {
    replaceBanks(state, banks) {
      state.banks = banks;
    },
    setBanksLoaded(state, isLoaded) {
      state.banksLoaded = isLoaded;
    },
  },
  actions: {
    fetchBanks: ({ commit }) => new Promise((resolve, reject) => {
      wdo.get('http://localhost:7070/getBanks?').then((banks) => {
        commit('replaceBanks', banks);
        commit('setBanksLoaded', true);
        resolve();
      }).catch((err) => reject(err));
    }),
    isUniqueBankName: (...args) => new Promise((resolve, reject) => {
      const { name } = args[args.length - 1];
      wdo.get(`http://localhost:7070/isUniqueBankName?${name}`).then((bool) => {
        console.log('bool:', !!bool);
        resolve(!!bool);
      }).catch((err) => reject(err));
    }),
  },

};
