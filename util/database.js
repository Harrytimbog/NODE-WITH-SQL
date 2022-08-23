const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "username",
  password: "password",
  database: "node-complete",
  port: "3306",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
