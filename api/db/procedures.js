const replaceAt = require('../helpers.js');

const insertIntoTable = (conn, tableName, insertObj) => {
  const values = Object.values(insertObj).join(', ');
  const fields = Object.keys(insertObj).join(', ');
  ///
  console.log(values);
  ///
  const q = `
    INSERT INTO ${tableName} ( ${fields} )
    VALUES ( ${values} );
  `;
  return new Promise((resolve, reject) => {
    conn.query(q, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res);
    });
  });
}

const descTable = (conn, name) => {
  return new Promise((resolve, reject) => {
    const q = `DESC ${name}`;
    conn.query(q, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const getBaseTableNames = (conn) => {
  const q = `SELECT table_name FROM information_schema.tables WHERE table_type = 'base table'`;
  return new Promise((resolve, reject) => {
    conn.query(q, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

// const insertUser = (conn, nickName, firstName, secondName, email, accessLevel, age, sex) => {
//   const q = `CALL InsertUser(?, ?, ?, ?, ?, ?, ?)`;
//   return new Promise((resolve, reject) => {
//     conn.query(q, [nickName, firstName, secondName, email, accessLevel, age, sex], (err, res) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(res);
//     });
//   });
// };

const updateTable = (conn, tableName, whereIdField, someId, updateObj) => {
  let setRow = '';
  for (const field in updateObj) setRow += `${field} = ${updateObj[field]},\n`;
  const lastComaId = setRow.lastIndexOf(',');
  setRow = replaceAt(setRow, lastComaId, ' ');
  someId = typeof someId === 'number' ? someId : `\'${someId}\'`;
  const q = `
    UPDATE ${tableName}
    SET
      ${setRow}
    WHERE
      ${whereIdField} = ${someId};
  `;
  return new Promise((resolve, reject) => {
    conn.query(q, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res);
    });
  });
};

const deleteRowsFromTable = (conn, tableName, whereIdField, someId) => {
  someId = typeof someId === 'number' ? someId : `\'${someId}\'`;
  const q = `DELETE FROM ${tableName} WHERE ${whereIdField} = ${someId};`;
  return new Promise((resolve, reject) => {
    conn.query(q, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res);
    });
  });
};

module.exports = {
  getUserByNickName,
  insertUser,
  updateTable,
  deleteRowsFromTable,
  insertIntoTable,
  getBaseTableNames,
  descTable,
  
};