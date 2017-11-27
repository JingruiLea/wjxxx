var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'wjxxx'
});
/* GET users listing. */
router.get('/', function (req, res, next) {
  let Form = [{title: '1603校级及以上获奖情况统计', id: '10086110'},
    {type: 'input', note: '你的姓名', placeholder: '在此输入内容将修改背景文字', icon: 'fa fa-cube', min: 0, max: 0},
    {type: 'radio', note: '性别', choices: ['男', '女', '其他']},
    {type: 'checkBox', note: '喜欢的水果', choices: ['香蕉', '苹果', '小米'], min: 0, max: 2}]
  res.send(JSON.stringify(Form));
});
router.post('/creatTable', function (req, res, next) {
  let table = {
    id: '',
    uuid: '',
    form: '',
    password: '',
  }
})
router.post('/submit', function (req, res, next) {

})
router.post('/init', function (req, res, next) {

})
module.exports = router;
