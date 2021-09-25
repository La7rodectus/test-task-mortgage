const DBC = require('../db/dbc.js').default;

const updateBank = async ({ req, data }) => {
  const bank = JSON.parse(data);
  console.log('bank', bank)
  const dbc = new DBC();
  const err = await dbc.init();
  if (err) return { res: null, err };
  const bn = bank.bankName;
  delete bank.bank_id;
  delete bank.bankName;
  console.log(bank)
  const res = await dbc.updateBankByName(bn, bank);
  dbc.connDestroy();
  return { data: JSON.stringify(res), err: null };
};

module.exports.default = updateBank;