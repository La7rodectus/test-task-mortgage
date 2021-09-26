const DBC = require('../db/dbc.js').default;

const getBanks = async () => {
  const dbc = new DBC();
  const err = await dbc.init();
  if (err) return { res: null, err };
  const banksArr = await dbc.getAllBanks();
  dbc.connDestroy();
  if (banksArr.length < 1) return { res: null, err: 'empty table' };
  const banks = {};
  for (const bank of banksArr) {
    banks[bank.bankName] = bank;
  }
  return { data: banks, err: null };
};

module.exports.default = getBanks;
