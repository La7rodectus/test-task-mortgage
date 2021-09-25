const DBC = require('../db/dbc.js').default;

const getBanks = async () => {
  const dbc = new DBC();
  const err = await dbc.init();
  if (err) return { res: null, err };
  const banks = await dbc.getAllBanks();
  dbc.connDestroy();
  if (banks.length < 1) return { res: null, err: 'empty table' };
  return { data: JSON.stringify(banks), err: null };
};

module.exports.default = getBanks;
