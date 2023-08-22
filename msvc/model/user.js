const { baseMysql } = require("../core/dataBasePool");
const { Model, DataTypes } = require("sequelize");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: "主键ID",
    },
    name: {
      type: DataTypes.STRING,
      comment: "用户姓名",
    },
    password: {
      type: DataTypes.STRING,
      comment: "用户密码",
    },
    nickname: {
      type: DataTypes.STRING,
      comment: "用户昵称",
    },
    gender: {
      type: DataTypes.BOOLEAN,
      comment: "用户性别",
    },
    birthday: {
      type: DataTypes.STRING,
      comment: "用户生日",
    },
    paymentAmount: {
      type: DataTypes.STRING,
      comment: "支付金额",
    },
    contactPhone: {
      type: DataTypes.STRING,
      comment: "手机号码",
    },
    email: {
      type: DataTypes.STRING,
      comment: "用户邮箱",
    },
    registrationDate: {
      type: DataTypes.DATE,
      comment: "报名日期",
    },
  },

  {
    sequelize: baseMysql,
    modelName: "User",
    freezeTableName: true,
  }
);

module.exports = User;
