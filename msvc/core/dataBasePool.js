const { Sequelize } = require("sequelize");

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } =
  process.env;

const sequelizePool = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  {
    dialect: "mysql",
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    timezone: "+08:00",
    logging: false,
    define: {
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      // 把驼峰命名转换为下划线
      underscored: true,
    },
  }
);

sequelizePool.sync({ force: false, alter: true });

sequelizePool
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = {
  baseMysql: sequelizePool,
};
