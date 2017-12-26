<template>
  <div @mouseenter="closeVisible=true" @mouseleave="closeVisible=false" style="position: relative;text-align: justify;">
    <mu-paper class="in-list" :zDepth="1" v-if="titleVisible">
      <mu-content-block style="display: inline-block">
        <a class="dislike" href="/#/feedback" v-show="closeVisible" @click="titleVisible=!titleVisible">隐藏此条</a>
        <div style="position: relative;margin-right: 55px;margin-bottom: 15px;">
          <div style="margin-top: 10px;">
            <a class="passageTitle" :href="userAddress">
              <mu-avatar slot="left" :src="userIcon"/>
            </a>
            <h3 style="display: inline;position: absolute;top: 0;margin: 0;padding-left: 15px"><a class="passageTitle"
                                                                                                  :href="userAddress">{{username}}</a>
            </h3>
            <p style="position: absolute;display: inline;padding-left: 15px;top:24px;margin: 0;">{{signature}}</p>
          </div>
          <div>
            <h2 style="margin-top: 10px;margin-bottom: 10px;"><a class="passageTitle" :href="passageAddress">{{passageTitle}}</a>
            </h2>
            <div v-if="passageFirstImg||passageAudio" class="media">
              <img style="height: 100%;width: 100%;display: block;" :src="passageFirstImg"/>
            </div>
            <a :href="passageAddress"><p class="passageContent"
                                         style="color: #24292e;display: inline; font-size: 15px;">
              {{passageContent}}
            </p></a>
          </div>
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
        userAddress: this.passage.userAddress,
        userIcon: this.passage.userIcon,
        closeVisible: false,
        titleVisible: true,
        passageAudio: this.passage.passageAudio,
        username: this.passage.username,
        signature: this.passage.signature,
        passageTitle: this.passage.passageTitle,
        passageAddress: this.passage.passageAddress,
        passageTitle: this.passage.passageTitle,
        passageFirstImg: this.passage.passageFirstImg,
        passageContent: this.passage.passageContent
      }
    },
    props: ['passage'],
    methods: {},
  }
</script>

<style>
  .dislike {
    position: absolute;
    top: 0;
    right: 0;
    text-decoration: none;
    margin-right: 15px;
    margin-top: 10px;
    color: #9fadc7;
    display: inline;
  }

  .dislike:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .media {
    position: relative;
    display: block;
    width: 190px;
    height: 105px;
    margin-top: -2px;
    margin-right: 18px;
    margin-bottom: 4px;
    float: left;
    overflow: hidden;
    background-position: 50%;
    background-size: cover;
    border-radius: 4px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .passageTitle {
    color: black;
    text-decoration: none;
  }

  .passageTitle:hover {
    color: black;
    text-decoration: underline;

  }

  .passageContent:hover {
    opacity: 0.7;
    cursor: pointer;
  }
</style>
