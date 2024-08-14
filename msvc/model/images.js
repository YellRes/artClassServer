const { baseMysql } = require("../core/dataBasePool");
const { Model, DataTypes } = require("sequelize");

class Images extends Model {}

Images.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: "主键ID",
    },
    name: {
      type: DataTypes.STRING,
      comment: "图片名称",
    },
    username: {
      type: DataTypes.STRING,
      comment: "用户名称，用于User表连表查询",
    },
    data: {
      type: DataTypes.BLOB('medium'),
      comment: "图片base64",
    },
    username: {
        type: DataTypes.STRING,
        comment: "描述",
      },
  },

  {
    sequelize: baseMysql,
    modelName: "Images",
    freezeTableName: true,
  }
);

module.exports = Images;
