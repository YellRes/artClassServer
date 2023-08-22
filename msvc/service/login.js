const User = require("../model/user");

const loginService = async (params) => {
  const { limit, offset } = params || {};
  // console.log(params);
};

module.exports = {
  loginService,
};
