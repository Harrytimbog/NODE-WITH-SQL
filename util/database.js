const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "Just4u..",
});

module.exports = pool.promise();
