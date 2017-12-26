<template>
  <div class="layout">
    <div class="content">
      <div class="body">
        <div>
          <h1 style="display: inline-block;border: none;font-size: 7.5em;font-weight: 300;margin-right: 100px;"><span
            style="color: #FF6666;">We</span><br>表&nbsp;单</h1>
          <div style="display: inline-block">
            <h1 style="text-decoration: none;border: none;font-weight: 300;font-size: 3.2em;text-align: left;">事务性<br>填表专用系统
            </h1>
            <a href="/#/login" class="button" style="display: inline-block;">登录</a>
            <a href="/#/fill" class="button" style="display: inline-block;background-color:#fff;color:#2196f3;">填表</a>
          </div>
        </div>
        <div class="inner">
          <div class="point">
            <h2>易用</h2>
            <p>简单易用的编辑器，<br>方便快捷地创建你的表单。<br>支持导入文件</p>
          </div>
          <div class="point">
            <h2>安全</h2>
            <p>为你的表单设置密码！<br>只有知道密码的人才能够填写！</p>
          </div>
          <div class="point">
            <h2>美观</h2>
            <p>为表单设置主题和背景！<br>让它独一无二~</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeTab: 'tab1',

      }
    }
    ,
    methods: {}
  }
</script>
<style>
  .button {
    margin: 1em 0;
    font-size: 1.05em;
    font-weight: 600;
    letter-spacing: 0.1em;
    min-width: 8em;
    text-align: center;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #2196f3;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #2196f3;
  }

  .point {
    width: 33%;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 2em;
  }

  .point h2 {
    color: #0066CC;
    font-size: 1.5em;
    font-weight: 400;
    margin: 0;
    padding: 0.5em 0;
  }

  .point p {
    color: #7f8c8d;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    word-spacing: 0.05em;
    font-size: larger;
  }

  .inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
</style>

