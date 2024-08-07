const { baseMysql } = require("../core/dataBasePool");
const { Model, DataTypes } = require("sequelize");

class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: "主键ID",
    },
    name: {
      type: DataTypes.STRING,
      comment: "课程名称",
    },
    username: {
      type: DataTypes.STRING,
      comment: "用户名称，用于User表连表查询",
    },
    consume: {
      type: DataTypes.INTEGER,
      comment: "消费的课时",
    },
    rest: {
      type: DataTypes.INTEGER,
      comment: "剩余课时",
    },
    startTime: {
      type: DataTypes.DATE,
      comment: "开始时间",
    },
    endTime: {
      type: DataTypes.DATE,
      comment: "结束时间",
    },
    detail: {
      type: DataTypes.STRING.BINARY,
      comment: "课程信息",
    },
    desc: {
        type: DataTypes.CHAR,
        comment: "描述",
    }
  },

  {
    sequelize: baseMysql,
    modelName: "Course",
    freezeTableName: true,
  }
);

module.exports = Course;
