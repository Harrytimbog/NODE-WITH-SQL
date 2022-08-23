const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Just4u..", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
