const http = require('http');

export default {
  state: {
    banks: {},
  },
  getters: {
    getCounter: (state) => state.counter,
  },
  actions: {
    fetchBanks: ({ commit }) => new Promise((resolve, reject) => {
      http.get('http://localhost:7070/', (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          console.log(data);
          const banks = data;
          commit('updateBanks', banks);
          resolve();
        });
      }).on('error', (err) => {
        console.log('Error: ' + err.message);
        reject();
      });

    }),

  },
  mutations: {
    updateBanks(state, banks) {
      state.banks = banks;
    },
  },
};
