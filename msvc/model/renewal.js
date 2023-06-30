const { baseMysql } = require("../core/dataBasePool.js");
const { Model, DataTypes, Deferrable } = require("sequelize");

class Renewal extends Model {}

Renewal.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: "主键ID",
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    // 外键配置
    references: {
      model: "User",
      key: id,
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  renewalAmount: {
    type: DataTypes.INTEGER,
    comment: "续费金额",
  },
});

model.exports = Renewal;
