const { encrypt, encryptWithSalt } = require("../../util/bcrypt");
const { successRes, errorRes } = require("../../util/response");
const User = require("../model/user");
const Salt = require("../model/salt");

/**
 * 登录
 */
const login = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  const user = await User.findOne({
    where: {
      name,
    },
  });

  if (!user) {
    ctx.body = errorRes({ text: "用户不存在，请注册", data: {} });
    return next();
  }

  console.log(user.id, "user.id");

  // 找到userId
  const saltObj = await Salt.findOne({
    where: {
      userId: user.id,
    },
  });
  console.log(saltObj);
  const hashPassword = await encryptWithSalt(password, saltObj.salt);

  const userWithRightPassword = await User.findOne({
    where: {
      name,
      password: hashPassword,
    },
  });
  if (!userWithRightPassword) {
    ctx.body = errorRes({ text: "密码错误", data: {} });
    return next();
  }

  // TODO:
  ctx.body = successRes({ text: "登录成功", data: {} });
  next();
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

  ctx.body = successRes({ text: "用户注册成功", data: {} });
};

module.exports = {
  login,
  register,
};
