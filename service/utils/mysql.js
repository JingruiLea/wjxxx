var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'wjxxx',
  port: 3306,
  acquireTimeout: 3000
});

var query = function (sql, options, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null);
    } else {
      conn.query(sql, options, function (err, results, fields) {
        //conn.release();
        callback(err, results, fields);
      });
      conn.release();
    }
  });
};

module.exports = query;
