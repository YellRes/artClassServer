const { baseMysql } = require("./baseMysql");

let allSqlAction = async (sql, val) => {
  let connection = await baseMysql.getConnection();

  let res;
  try {
    res = await connection.query(sql, val);
  } catch (e) {}
  connection.release();

  return res;
};

module.exports = {
  allSqlAction,
};
