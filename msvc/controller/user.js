const { getUserList } = require("../service/user");

const getAllUser = async (ctx, next) => {
  let data = await getUserList();
  return (ctx.response.body = data);
};

module.exports = {
  getAllUser,
};
