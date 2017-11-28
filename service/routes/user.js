var express = require('express');
var router = express.Router();
var connection = require('../utils/mysql');
var mysql = require("mysql")
const crypto = require('crypto')
var md5 = crypto.createHmac('md5');
/* GET home page. */
router.post('/login', function (req, res, next) {
  if (req.body.username && req.body.password) {
    var username = req.body.username
    var password = req.body.password
    connection('SELECT * from users where username=?' + mysql.escape(username),
      function (error, results1, fields) {
        if (error || results1.length > 1) {
          console.log(error.toString())
          res.send({status: 'Internal Error'})
          res.end()
        } else if (results1.length == 1) {
          var salt = results1[0].salt
          md5.update(password, salt)
          var pass = md5.digest('hex')
          if (pass === results1[0].password) {
            console.log(results1[0].userdata)
            res.res.send({userdata: results1[0].userdata, status: 'Success'})
            res.end()
            console.log('The solution2 is: ', JSON.stringify(results1));
          } else {
            res.send({status: 'Password Error'})
            res.end()
          }
        } else {
          res.send({status: 'Not Found'})
          res.end()
        }
      })
  }
})

router.post('/register', function (req, res, next) {
  if (req.body.username && req.body.password) {
    connection('SELECT * from users where username=?' + mysql.escape(username),
      function (error, results, fields) {
        if (error || results.length > 1) {
          console.log(error.toString())
          res.res.send({status: 'Internal Error'})
          res.end()
        } else if (results.length == 0) {
          var username = req.body.username
          var password = req.body.password
          var salt = Date.now()
          var pass = md5.update(password, salt.toString())
          connection('Insert into users values (0,?,?,?,?)', [mysql.escape(username), pass, salt, '{}'],
            function (error, results1, fields) {
              if (error) {
                console.log(error.toString())
              } else {
                res.send({status: 'Register Success'})
                res.end()
                console.log('The solution2 is: ', JSON.stringify(results1));
              }
            })
        } else {

        }
      });

  }
})


module.exports = router;
