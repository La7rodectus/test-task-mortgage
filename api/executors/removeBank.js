const DBC = require('../db/dbc.js').default;

const removeBank = async ({ req, argsArr }) => {
  const name = argsArr[0];
  console.log(argsArr)
  const dbc = new DBC();
  const err = await dbc.init();
  if (err) return { res: null, err };
  const res = await dbc.deleteFromBankByName(name);
  dbc.connDestroy();
  return { data: res, err: null };
};

module.exports.default = removeBank;