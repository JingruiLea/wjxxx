<template>
  <div>
    <passage-card v-for="(passage,index) in passages" :passage="passage" key="index"/>
  </div>
</template>

<script>
  import passageCard from './passageCard.vue'

  export default {
    components: {
      passageCard
    },
    name: 'passageList',
    data() {
      return {
        passages: [
          {
            id: '',
            userIcon: './static/images/2542851-04e9a0baba4841d1.jpg',
            closeVisible: false,
            titleVisible: true,
            username: '李井瑞',
            signature: '我的个性签名',
            passageTitle: '文章标题',
            passageAddress: '/#/passage',
            passageTitle: '史上最完整的和弦属性列表',
            passageContent: '你是否已经厌倦了千篇一律的和弦搭配，想要寻找新鲜的刺激？ 你想知道三和弦最多有多少种类型吗？四个声部的和弦呢？ 你想知道它们中哪些协和，哪些刺耳，并加以归纳比较吗？ 你想知道有哪些和弦之间是互为转位关系的吗…'
          }, {
            id: '',
            userIcon: './static/images/2542851-04e9a0baba4841d1.jpg',
            closeVisible: false,
            titleVisible: true,
            username: '李井瑞',
            signature: '我的个性签名',
            passageTitle: '文章标题',
            passageAddress: '/#/passage',
            passageTitle: '史上最完整的和弦属性列表',
            passageFirstImg: 'http://upload-images.jianshu.io/upload_images/2542851-04e9a0baba4841d1.jpg',
            passageContent: '你是否已经厌倦了千篇一律的和弦搭配，想要寻找新鲜的刺激？ 你想知道三和弦最多有多少种类型吗？四个声部的和弦呢？ 你想知道它们中哪些协和，哪些刺耳，并加以归纳比较吗？ 你想知道有哪些和弦之间是互为转位关系的吗…'
          }],
      }
    },
    mounted() {

    }
  }
</script>
