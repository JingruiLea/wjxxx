<template>
  <div id="app" style="height: 100%;">
    <mu-appbar :title="isPhone?'':'小米表单'">
      <mu-icon-button icon="menu" slot="left"/>
      <mu-flat-button label="首页" slot="right" href="/#/"/>
      <mu-flat-button :label="isPhone?'填表':'填写表单'" slot="right" href="/#/fill"/>
      <mu-flat-button :label="isPhone?'创建':'创建表单'" slot="right" href="/#/create"/>
      <!--mu-icon-button icon=":fa fa-user" v-if="login" slot="right" href="/#/user"/-->
      <a href="/#/user" slot="right" v-if="login">
        <mu-avatar slot="right" :src="profile"/>
      </a>
      <mu-raised-button :label="isPhone?'登录/注册':'登录'" v-else slot="right" style="border-radius: 20px"
                        @click="$router.push('/login')" secondary/>
      <mu-flat-button label="注册" slot="right" v-if="!isPhone&&!login" href="/#/register"/>
      <mu-flat-button label="留言" slot="right" v-if="!isPhone" href="/#/feedback"/>
      <mu-icon-button icon=":fa fa-github" v-if="!isPhone" slot="right" href="https://github.com/1079805974/wjxxx"
                      target="_blank"/>
    </mu-appbar>
    <router-view></router-view>
    <p style="font-family:华文楷体;font-size: 16px;text-align: center" class="footer">
      Copyright ©2017 by LJR. All Rights Reserved</p>
  </div>
</template>

<script>
  import bus from './bus.js'
  export default {
    name: 'app',
    data() {
      return {
        login: false,
        clientWidth: 0,
        profile: ''
      }
    },
    computed: {
      isPhone() {
        return this.clientWidth <= 768
      },
    },
    methods: {},
    mounted() {
      const that = this
      bus.$on('login', function (login) {
        that.login = login
        that.profile = bus.userdata.profile
      })
      const that2 = this
      this.clientWidth = document.documentElement.clientWidth
      window.onresize = function temp() {
        that2.clientWidth = document.documentElement.clientWidth
      }
      // var session = this.getCookie('session')
      // if (session) {
      /*this.axios.get(this.$url + '/session?session=' + '2512b32eb995a478c673027eefe37bd4')
          .then(res => {
            if (res.data.status == 'Success') {
              bus.login = true;
              bus.userdata = res.data.userdata.slice(0)
            } else {
              bus.login = false;
            }
          }, error => {
          })
      } else {
        bus.login = false
      }*/
    }
  }
</script>

<style>
  .el-form-item__content:hover > .hideButton {
    display: inline;
  }

  .layout {
    background-color: rgb(255, 255, 255);
    min-height: 84vh;
  }

  .mu-appbar-title span {
    float: left;
    padding-left: 10px;
  }

  .body {

    border-radius: 5px;
    min-height: 500px;
  }
  html {
    height: 100%;

  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eeeeee;
  }

  h1 {
    text-align: center;
    font-size: 36px;
    padding-bottom: 9px;
    margin: 20px 0px 20px 0px;
    border-bottom: 1px solid #eee;
  }

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
  }

  .el-form-item__content {
    transition: all 3s;
  }

  .addLabel {
    font-family: SansSerif;
  }

  .el-col-md-2 + .el-col-md-2 {
    margin-left: 10px;
  }

  .addInput {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .addSelect {
    margin-top: 30px;
  }

  .addButton {
    margin-top: 20px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  .el-main {
    min-height: 70vh;
    margin-top: 30px;
    padding-bottom: 60px
  }
  .el-container {
    height: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .mu-flat-button {
    text-transform: none;
  }

  @media (min-width: 768px) {
    .el-container {
      width: 750px;
      height: 100%;
    }
  }

  @media (min-width: 992px) {
    .el-container {
      width: 970px;
      height: 100%;
    }

  }

  /*@import "../static/css/style2.css";*/
</style>
