const getBanks = require('./getBanks.js').default;
const isUniqueBankName = require('./isUniqueBankName.js').default;
const updateBank = require('./updateBank.js').default;

module.exports.default = {
  getBanks,
  isUniqueBankName,
  updateBank,

};