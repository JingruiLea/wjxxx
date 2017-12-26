<template>
  <div style="text-align: center;padding-top: 60px;" class="container">
    <div style="text-align: justify;" class="user">
      <div>
        <img :src="profile" style="width: 120px;height: 120px;border-radius: 50%;display: inline-block;"/>
        <div style="display: inline-block;margin-left: 40px;">
          <p>欢迎</p>
          <h1>{{username}}</h1>
        </div>
        <mu-raised-button
          style="float: right;margin-top: 100px;margin-right: 50px;border: solid #0f88eb; color: #0f88eb;"
          label="编辑个人资料"/>
      </div>
      <div>
        <h1>我的表单</h1>
        <div v-for="(table,index) in currentTables" class="table-item" :key="index">
          <h2 style="display: inline-block">{{table[0].title}}</h2>
          <div style="display: inline-block;float:right;padding-top: 23px;">
            <a class='table-item-a' style="color: #2196f3;" :href="'/#/editor/'+table[0].id">查看数据</a>
            <a class='table-item-a' style="color: #1a31e7;" :href="'/#/editor/'+table[0].id">修改</a>
            <a class='table-item-a' style="color: red;">删除</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '../bus.js'

  export default {
    data() {
      return {
        profile: bus.userdata.profile,
        username: bus.userdata.nickname,
        currentTables: bus.userdata.tables
      }
    },
    mounted() {

    }
  }
</script>

<style>
  .table-item {
    padding-top: 20px;
    padding-bottom: 18px;
    border-bottom: 1px solid #eeeeee;
  }

  .table-item-a + .table-item-a {
    padding-left: 20px;
    padding-top: 20px;
  }

  .user .mu-item-title {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
      height: 100%;
      margin: 0 auto;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
      height: 100%;
      margin: 0 auto;
    }
  }

  .user .h1 {
    text-decoration: none;
  }
</style>
