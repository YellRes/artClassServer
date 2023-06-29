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
    contactMobile: {
      type: DataTypes.STRING,
      comment: "手机号码",
    },
    // course
  },

  {
    sequelize: baseMysql,
    modelName: "user",
    freezeTableName: true,
  }
);

module.exports = User;
