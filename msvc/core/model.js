const { baseMysql } = require("./dataBasePool");

let allSqlAction = async (sql, val) => {
  // TODO: 不支持await?
  // let connection = await baseMysql.getConnection();
  // let res;
  // try {
  //   res = await connection.query(sql, val);
  // } catch (e) {}
  // console.log(connection, "connection");
  // connection.release();
  return new Promise((resolve, reject) => {
    baseMysql.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, val, (err, res) => {
        if (err) return err;
        resolve(res);
      });
    });
  });
};

module.exports = {
  allSqlAction,
};
