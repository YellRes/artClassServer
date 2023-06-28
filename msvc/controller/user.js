const userService = require("../service/user");

const getAllUser = async (ctx, next) => {
  let data = await userService.getAllUser();
  return (ctx.response.body = data);
};

module.exports = {
  getAllUser,
};
