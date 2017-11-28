<template>
  <div id="app" style="height: 100%;">
    <mu-appbar title="小米表单">
      <mu-icon-button icon="menu" slot="left"/>
      <mu-flat-button label="首页" slot="right" href="/#/"/>
      <mu-flat-button label="填写表单" slot="right" href="/#/fill"/>
      <mu-flat-button label="创建表单" slot="right" href="/#/create"/>
      <mu-raised-button label="登陆" v-if="!login" slot="right" style="border-radius: 20px" secondary/>
      <mu-flat-button label="注册" slot="right" href="/#/aaa"/>
      <mu-flat-button label="留言" slot="right" href="/#/feedback"/>
      <mu-icon-button icon=":fa fa-user" v-if="login" slot="right" href="/#/user"/>
      <mu-icon-button icon=":fa fa-github" slot="right" href="https://github.com/1079805974/wjxxx/tree/master"
                      target="_blank"/>
    </mu-appbar>
    <router-view></router-view>
    <p style="font-family:华文楷体;font-size: 16px;text-align: center" class="footer">
      Copyright ©2017 by LJR. All Rights Reserved</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        login: false,
      }
    },
    methods: {},
    mounted() {
      var session = this.getCookie('session')
      if (session) {
        this.axios.get(this.$url + '/session?' + session)
          .then(res => {
            if (res.data.status == 'success') {
              this.login = 'true';
            }
          }, error => {
          })
      } else {
        this.login = false
      }
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
    background-color: white;
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

  .el-container {
    height: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .el-main {
    min-height: 70vh;
    margin-top: 30px;
    padding-bottom: 60px
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
