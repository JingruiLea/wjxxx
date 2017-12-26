import Vue from 'vue';

export default window.bus = new Vue({
    data: {
      FormData: [],
      Form: {},
      userdata: {
        username: 'admin',
        nickname: '李井瑞',
        profile: './src/assets/userIcon.jpg',
        tables: [
          [
            {title: '1603校级获奖情况统计表', id: '10086110'},
            {type: 'input', note: '你的姓名', placeholder: '在此输入内容将修改背景文字', icon: 'fa fa-cube', min: 0, max: 0},
            {type: 'radio', note: '性别', choices: ['男', '女', '其他']},
            {type: 'checkBox', note: '喜欢的水果', choices: ['香蕉', '苹果', '小米'], min: 0, max: 0},
          ],
          [
            {title: '1603校级获奖情况统计表', id: '10086110'},
            {type: 'input', note: '你的姓名', placeholder: '在此输入内容将修改背景文字', icon: 'fa fa-cube', min: 0, max: 0},
            {type: 'radio', note: '性别', choices: ['男', '女', '其他']},
            {type: 'checkBox', note: '喜欢的水果', choices: ['香蕉', '苹果', '小米'], min: 0, max: 0},
          ],
          [
            {title: '1603校级获奖情况统计表', id: '10086110'},
            {type: 'input', note: '你的姓名', placeholder: '在此输入内容将修改背景文字', icon: 'fa fa-cube', min: 0, max: 0},
            {type: 'radio', note: '性别', choices: ['男', '女', '其他']},
            {type: 'checkBox', note: '喜欢的水果', choices: ['香蕉', '苹果', '小米'], min: 0, max: 0},
          ]
        ]
      },
      isLogin: false,
      clientWidth: 0
    },
    created() {
      const that = this
      this.$on('display', function (FormData) {
        // console.log(JSON.stringify(FormData)+'bushshshshshssh')
        //FormData=JSON.parse(FormData)
        eval('FormData=' + FormData)
        that.FormData = FormData.slice(0)
        //console.log(that.FormData)
      })
      this.$on('needPassword', function (val, fun) {
        if (val == 'admin') {
          fun(true)
        } else {
          fun(false)
        }
      })
    },
  methods: {
    isPhone() {
      return this.clientWidth <= 768
    },
    fill(req, resfun) {
      if (req.id === '10086110' || req.id === '10086') {
        if (req.password === 'admin') {
          resfun('Success')
          bus.FormData = [
            {title: '1603校级获奖情况统计表', id: '10086110'},
            {type: 'input', note: '你的姓名', placeholder: '在此输入内容将修改背景文字', icon: 'fa fa-cube', min: 0, max: 0},
            {type: 'radio', note: '性别', choices: ['男', '女', '其他']},
            {type: 'checkBox', note: '喜欢的水果', choices: ['香蕉', '苹果', '小米'], min: 0, max: 0},]
        } else {
          resfun('Password Error')
        }
      } else {
        resfun('Not Found')
      }
    },
    login(req, resfun) {
      if (req.username === 'admin' && req.password === 'admin') {
        resfun(true)
        this.isLogin = true
        this.userdata = {
          username: 'admin',
          nickname: '李井瑞',
          profile: './src/assets/userIcon.jpg',
          tables: [
            [
              {title: '1603校级获奖情况统计表', id: '10086110'},
              {type: 'input', note: '你的姓名', placeholder: '在此输入内容将修改背景文字', icon: 'fa fa-cube', min: 0, max: 0},
              {type: 'radio', note: '性别', choices: ['男', '女', '其他']},
              {type: 'checkBox', note: '喜欢的水果', choices: ['香蕉', '苹果', '小米'], min: 0, max: 0},]
          ]
        }
      }
    }
  },
  watch: {
    isLogin(val) {
      this.$emit('login', val)
    }
  },
  mounted() {
    this.clientWidth = document.documentElement.clientWidth
    const that = this
    window.onresize = function temp() {
      that.clientWidth = document.documentElement.clientWidth
    }
  }
  }
);
