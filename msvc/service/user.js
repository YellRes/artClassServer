const User = require("../model/user");

const getUserList = async (params) => {
  const { limit, offset, project } = params || {};

  return await User.findAndCountAll({
    limit,
    offset,
    order: [["id", "desc"]],
  });
};

module.exports = {
  getUserList,
};
