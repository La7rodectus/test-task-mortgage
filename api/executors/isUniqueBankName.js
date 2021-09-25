const DBC = require('../db/dbc.js').default;

const isUniqueBankName = async (name) => {
  const dbc = new DBC();
  const err = await dbc.init();
  if (err) return { res: null, err };
  const banks = await dbc.getAllBanks();
  dbc.connDestroy();
  if (banks.length < 1) return { res: true, err: null };
  const bankNames = [];
  for (const bank of banks) {
    bankNames.push(bank.bankName);
  }
  return { data: JSON.stringify(!bankNames.includes(name)), err: null };
};

module.exports.default = isUniqueBankName;
