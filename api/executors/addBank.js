const DBC = require('../db/dbc.js').default;

const addBank = async ({ data }) => {
  const bank = JSON.parse(data);
  const dbc = new DBC();
  const err = await dbc.init();
  if (err) return { ok: false, res: null, err };
  try {
    const res = await dbc.insertBank(bank);
    await dbc.connDestroy();
    return { ok: true, data: res, err: null };
  } catch (err) {
    return { ok: false, data: null, err };
  }
};

module.exports.default = addBank;