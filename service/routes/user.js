var express = require('express');
var router = express.Router();
var connection = require('../utils/mysql');
var mysql = require("mysql")
const crypto = require('crypto')
var md5 = crypto.createHash('md5');

/* GET home page. */
router.post('/login', function (req, res, next) {
  console.log(req.body)
  if (req.body.username && req.body.password) {
    var username = req.body.username
    var password = req.body.password
    connection('SELECT * from users where username=' + mysql.escape(username),
      function (error, results1, fields) {
        if (error || results1.length > 1) {
          console.log(error.toString())
          res.send({status: 'Internal Error'})
          res.end()
        } else if (results1.length == 1) {
          console.log(results1[0])
          var salt = results1[0].salt
          var pass = crypto.createHash('md5').update(password + salt).digest('hex')
          if (results1[0].password == '' || pass === results1[0].password) {
            if (req.body.rememberMe == true) {
              var session = crypto.createHash('md5').update(username + Date.now()).digest('hex')
              connection('update sessions set session=' + mysql.escape(session) + ' where username=' + mysql.escape(username), function (err) {
                if (err) console.log(err.toString())
              })
              res.cookie('session', session, {expires: new Date(Date.now() + 86400), httpOnly: true});
              res.send({userdata: results1[0].userdata, status: 'Success'})
              res.end()
            } else {
              res.send({userdata: results1[0].userdata, status: 'Success'})
              res.end()
            }
          } else {
            res.send({status: 'Password Error'})
            res.end()
          }
        } else {
          res.send({status: 'Not Found'})
          res.end()
        }
      }
    )
  }
})

router.post('/needPassword', function (req, res, next) {
  console.log(req.body)
  if (req.body.username) {
    var username = req.body.username
    connection('SELECT * from users where username=' + mysql.escape(username), function (error, results1, fields) {
      if (error) {
        console.log(error.toString())
        res.send({status: 'Internal Error'})
        res.end()
      } else {
        if (results1.length == 1) {
          console.log(JSON.stringify(results1))
          if (results1[0].password == '')
            res.send({status: 'Success', needPassword: false})
          else {
            res.send({status: 'Success', needPassword: true})
          }
          res.end()
        } else if (results1.length == 0) {
          res.send({status: 'Not Found'})
          res.end()
        } else {
          res.send({status: 'Found Many', needPassword: false})
          res.end()
        }
      }
    })
  }
})

router.post('/register', function (req, res, next) {
  if (req.body.username && req.body.password) {
    connection('SELECT * from users where username=?' + mysql.escape(username),
      function (error, results, fields) {
        if (error || results.length > 1) {
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
