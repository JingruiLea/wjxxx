<template>
  <div id="app">
    <router-view></router-view>
    <el-footer>
      <el-row type="flex" justify="center">
        <p style="font-family:华文楷体;font-size: 16px;">Copyright ©2017 by LJR. All Rights Reserved</p>
      </el-row>
    </el-footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
  }
</script>

<style>
  .el-form-item__content:hover > .hideButton {
    display: inline;
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
    height: 100px;
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
