const { encrypt, encryptWithSalt } = require("../../util/bcrypt");
const { successRes, errorRes } = require("../../util/response");
const User = require("../model/user");
const Salt = require("../model/salt");
const jwt = require("jsonwebtoken");

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

  const token = jwt.sign(
    {
      name,
      id: userWithRightPassword.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );
  ctx.body = successRes({ text: "登录成功", data: token });
  next();
};

/**
 * 注册
 * email 字段必填且要验证
 */

const register = async (ctx, next) => {
  const { name, password, email } = ctx.request.body;
  if (!email) {
    ctx.body = errorRes({ text: "必须提供邮箱账号" });
    return next();
  }
  const existedUser = await User.findOne({
    where: {
      email,
    },
  });

  if (existedUser) {
    ctx.body = errorRes({ text: "用户已经注册，请登录", data: {} });
    return next();
  }

  const criypt = await encrypt(password);
  const userObj = {
    name,
    password: criypt.hash,
    email,
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
