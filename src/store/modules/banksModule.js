const wdo = require('../../utils/wdo.js');

const API = 'https://api-mortgage-calc-me.herokuapp.com/';

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
    removeBank(state, bankName) {
      delete state.banks[bankName];
    },
  },
  actions: {
    fetchBanks: ({ commit }) => new Promise((resolve, reject) => {
      wdo.get(`${API}/getBanks?`).then((banks) => {
        commit('replaceBanks', banks);
        commit('setBanksLoaded', true);
        resolve(true);
      }).catch((err) => reject(err));
    }),
    isUniqueBankName: (...args) => new Promise((resolve, reject) => {
      const { name } = args[args.length - 1];
      wdo.get(`${API}/isUniqueBankName?name=${name}`).then((bool) => {
        console.log('bool:', !!bool);
        resolve(!!bool);
      }).catch((err) => reject(err));
    }),
    updateBank: ({ dispatch }, { postData }) => new Promise((resolve, reject) => {
      wdo.post(`${API}/updateBank?`, JSON.stringify(postData)).then(async (res) => {
        console.log(res);
        await dispatch('fetchBanks');
        resolve(res);
      }).catch((err) => reject(err));
    }),
    removeBank: ({ commit }, { bankName }) => new Promise((resolve, reject) => {
      wdo.get(`${API}/removeBank?name=${bankName}`).then((bool) => {
        console.log('bool:', !!bool);
        commit('removeBank', bankName);
        resolve(bool);
      }).catch((err) => reject(err));
    }),
    addBank: ({ dispatch }, { postData }) => new Promise((resolve, reject) => {
      wdo.post(`${API}/addBank?`, JSON.stringify(postData)).then(async (bool) => {
        console.log('bool:', !!bool);
        const res = await dispatch('fetchBanks');
        resolve(res && bool);
      }).catch((err) => reject(err));
    }),
  },

};
