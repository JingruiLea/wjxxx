var express = require('express');
var router = express.Router();
var connection = require('../utils/mysql');
var mysql = require("mysql");
/* GET home page. */
router.get('/', function (req, res, next) {
  var session = req.query.session
  console.log(session)
  if (session) {
    connection('SELECT * from sessions where session=' + mysql.escape(session),
      function (error, results1, fields) {
        if (error) {
          console.log(error.toString())
          res.send({status: 'Internal Error'})
          res.end()
        } else {
          if (results1.length >= 1) {
            var username = results1[0].username
            connection('SELECT * from users where username=' + mysql.escape(username),
              function (error, results, fields) {
                if (error) {
                  console.log(error.toString())
                  res.send({status: 'Internal Error'})
                  res.end()
                } else {
                  if (results[0].hasOwnProperty('userdata')) {
                    var userdata = results[0].userdata
                    res.send({userdata: userdata, status: 'Success'})
                    res.end()
                  }
                }
                console.log('The solution1 is: ', JSON.stringify(results));
              });
          } else {
            res.send({status: 'NotFound'})
            res.end()
          }
          console.log('The solution2 is: ', JSON.stringify(results1));
        }
      });
  }
});


module.exports = router;
