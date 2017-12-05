<template>
  <div @mouseenter="closeVisible=true" @mouseleave="closeVisible=false" style="position: relative;text-align: justify;">
    <mu-paper class="in-list" :zDepth="1" v-if="titleVisible">
      <a class="dislike" href="/#/feedback" v-show="closeVisible" @click="titleVisible=!titleVisible">不喜欢</a>
      <mu-content-block>
        <div style="position: relative;margin-right: 9px;margin-bottom: 15px">
          <div style="margin-top: 16px;">
            <mu-avatar slot="left" src="http://upload-images.jianshu.io/upload_images/2542851-04e9a0baba4841d1.jpg"/>
            <h3 style="display: inline;position: absolute;top: 0;margin: 0;padding-left: 15px">{{username}}</h3>
            <p style="position: absolute;display: inline;padding-left: 15px;top:24px;margin: 0;">{{signature}}</p>
          </div>
          <a class="passageTitle" :href="passageAddress"><h3>田园猫的颜值可以多高？</h3></a>
          <p style="color: #24292e;">
            2017年9月28日 晚上九点多，加班的室友卡卡终于回家了，她看到门槛上一团毛绒绒的白色，还以为是谁把不要的玩具扔家门口了。 “喂，有只猫跑进来了！” 我听到卡卡的声音，马上跑到门口。 只见一只巴掌大的白色小…</p>
        </div>
      </mu-content-block>
    </mu-paper>
  </div>
</template>

<script>
  export default {
    name: 'passageCard',
    data() {
      return {
        closeVisible: false,
        titleVisible: true,
        username: '李井瑞',
        signature: '我的个性签名',
        userAvatar: '',
        passageTitle: '文章标题',
        passageAddress: 'http://www.baidu.com'
      }
    },
    methods: {},
  }
</script>

<style>
  .dislike {
    float: right;
    text-decoration: none;
    margin-right: 15px;
    margin-top: 10px;
  }

  .passageTitle {
    color: black;
    text-decoration: none;
  }

  .passageTitle:hover {
    color: black;
    text-decoration: underline;
  }

</style>
