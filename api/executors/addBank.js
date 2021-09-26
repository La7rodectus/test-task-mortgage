const DBC = require('../db/dbc.js').default;

const addBank = async ({ data }) => {
  console.log(data)
  const bank = JSON.parse(data);
  console.log(bank)
  const dbc = new DBC();
  const err = await dbc.init();
  if (err) return { res: null, err };
  const res = await dbc.insertBank(bank);
  dbc.connDestroy();
  return { data: res, err: null };
};

module.exports.default = addBank;