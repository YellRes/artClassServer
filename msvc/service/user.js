const { allSqlAction } = require("../core/model");

const getAllUser = async () => {
  let sql = "select * from users";
  console.log(allSqlAction, "allSqlAction");
  return await allSqlAction(sql);
};

module.exports = { getAllUser };
