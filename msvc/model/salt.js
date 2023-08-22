const { baseMysql } = require("../core/dataBasePool");
const { Model, DataTypes, Deferrable } = require("sequelize");

class Salt extends Model {}

Salt.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: "User",
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    salt: {
      type: DataTypes.STRING,
      comment: "盐",
    },
    createTime: {
      type: DataTypes.DATE,
      comment: "时间",
    },
  },
  {
    sequelize: baseMysql,
    modelName: "Salt",
  }
);

module.exports = Salt;
