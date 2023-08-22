const { encrypt, encryptWithSalt } = require("../../util/bcrypt");
const User = require("../model/user");
const Salt = require("../model/salt");

/**
 * 登录
 */
const login = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  // const user = await User.
};

/**
 * 注册
 */

const register = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  const criypt = await encrypt(password);

  const userObj = {
    name,
    password: criypt.hash,
  };
  const user = await User.create(userObj);

  await Salt.create({
    salt: criypt.salt,
    userId: user.id,
    createTime: new Date(),
  });

  ctx.body = "用户注册成功";
};

module.exports = {
  login,
  register,
};
