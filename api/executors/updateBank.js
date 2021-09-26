const DBC = require('../db/dbc.js').default;

const updateBank = async ({ req, data }) => {
  const parsedData = JSON.parse(data);
  const bank = parsedData.bank;
  const oldBankName = parsedData.oldBName;
  const dbc = new DBC();
  const err = await dbc.init();
  if (err) return { res: null, err };
  delete bank.bank_id;
  const res = await dbc.updateBankByName(oldBankName, bank);
  dbc.connDestroy();
  return { data: res, err: null };
};

module.exports.default = updateBank;