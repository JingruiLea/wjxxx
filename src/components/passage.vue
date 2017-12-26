<template>
  <div>
    <div class="passage">
      <h1>{{passage.title}}</h1>
    </div>
    <div v-html="passage.content" class="passage">
    </div>
    <div class="passage PostComment">
      <div>
        <mu-raised-button :label="likeNum" class="like-button" icon=":fa fa-thumbs-o-up"/>
        <mu-raised-button :label="dislikeNum" class="dislike-button" icon=":fa fa-thumbs-o-down"/>
        <mu-flat-button style="float: right;" icon="error_outline" label="举报"/>
        <mu-flat-button style="float: right;" icon=":fa fa-heart-o" label="收藏"/>
      </div>
      <div class="comment">
        <img :src="userIcon" style="border-radius: 50%;width: 40px;height: 40px;display: inline;float: left"/>
        <p style="float: left;margin-left: 10px;">{{username}}</p>
        <el-input
          type="textarea"
          autosize
          placeholder="写下你的评论..."
          v-model="comment"
          @focus="commentFocused"
        >
        </el-input>
        <br/>
        <transition name="fade2">
          <div style="position: relative;display: block;margin-top: 10px;text-align: right;" v-if="commentFocus">
            <mu-flat-button label="关闭" style="display: inline-block;" @click="commentBlurred"/>
            <mu-raised-button label="评论" style="display: inline-block; " backgroundColor="#3db922"/>
          </div>
        </transition>
      </div>
      <hr/>
      <div class="comment-list">
        <p>评论列表({{comments.length}})</p>
        <div class="comment-item" v-for="comment in comments">
          <div style="margin-top: 10px;">
            <a class="passageTitle" :href="comment.userAddress">
              <mu-avatar slot="left" :src="comment.userIcon"/>
            </a>
            <h3 style="display: inline;position: absolute;top: 0;margin: 0;padding-left: 15px"><a class="passageTitle"
                                                                                                  :href="comment.userAddress">{{comment.username}}</a>
            </h3>
            <p style="position: absolute;display: inline;padding-left: 15px;top:24px;margin: 0;">
              {{comment.signature}}</p>
          </div>
          <p style="padding-left: 50px;margin-top: 5px;">{{comment.comment}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        comments: [
          {
            userIcon: 'http://upload-images.jianshu.io/upload_images/2542851-04e9a0baba4841d1.jpg',
            username: '门容',
            comment: '技术贴，赞！我表妹就是多囊卵巢综合征，卵泡多都长不大。想问下多囊卵巢是不是会影响月经？她的月经一直不准，最离谱的甚至一年才来一次？想问下是不是只有来月经了才会有排卵？她这情况怀孕几率大吗？',
            signature: 'widafhafhaas',
            userAddress: 'asfasfsf',
          }],
        passage: {
          content: '<div data-zop="{&quot;authorName&quot;:&quot;量化投资机器学习&quot;,&quot;itemId&quot;:&quot;31783727&quot;,&quot;title&quot;:&quot;&quot;,&quot;type&quot;:&quot;article&quot;}" data-za-module="PostItem" data-za-module-info="{&quot;card&quot;:{&quot;content&quot;:{&quot;type&quot;:&quot;Post&quot;,&quot;token&quot;:&quot;31783727&quot;}}}"><div><a href="https://www.zhihu.com/people/zxlrs" target="_blank" rel="noopener noreferrer"><img alt="量化投资机器学习" src="https://pic2.zhimg.com/v2-7b77a338acc3cd2f28597527e6df3820_xs.jpg" srcset="https://pic2.zhimg.com/v2-7b77a338acc3cd2f28597527e6df3820_l.jpg 2x"></a><a href="https://www.zhihu.com/people/zxlrs" target="_blank">量化投资机器学习</a><div data-hover-title="2017 年 12月 7 日星期四中午 11 点 53 分"><time datetime="Thu Dec 07 2017 11:53:31 GMT+0800 (中国标准时间)">3 小时前</time></div></div></div><div><p>年初就一直在等啦</p><hr /><p>终于等到这本书</p><p>分享一下</p><p><br></p><blockquote><b>此书的代码下载地址：</b><br><i><a href="http://link.zhihu.com/?target=https%3A//github.com/fchollet/deep-learning-with-python-notebooks" target="_blank" rel="nofollow noreferrer">https://github.com/fchollet/deep-learning-with-python-notebooks<i></i></a></i></blockquote><figure><img src="https://pic4.zhimg.com/50/v2-3c6f668bad9be923aa2e07b75eb02ec1_hd.jpg" data-caption="" data-size="normal" data-rawwidth="924" data-rawheight="264" width="924" data-original="https://pic4.zhimg.com/v2-3c6f668bad9be923aa2e07b75eb02ec1_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-3c6f668bad9be923aa2e07b75eb02ec1_b.jpg"></figure><figure><img src="https://pic4.zhimg.com/50/v2-56e4ca8f9f2a87aff959c25e98ec8f5d_hd.jpg" data-caption="" data-size="normal" data-rawwidth="720" data-rawheight="903" width="720" data-original="https://pic4.zhimg.com/v2-56e4ca8f9f2a87aff959c25e98ec8f5d_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-56e4ca8f9f2a87aff959c25e98ec8f5d_b.jpg"></figure><p><b>链接:&nbsp;<a href="http://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1kUBJHun" target="_blank" rel="nofollow noreferrer">https://pan.baidu.com/s/1kUBJHun<i></i></a></b></p><p><b>密码: f3c4</b></p></div><div><div><br></div></div>',
          title: '【干货】Deep Learning with Python 终于等到你!',
        },
        username: '门荣伟',
        userIcon: 'http://upload-images.jianshu.io/upload_images/2542851-04e9a0baba4841d1.jpg',
        likeNum: '123',
        dislikeNum: '0',
        comment: '',
        commentFocus: false,
      }
    },
    methods: {
      commentFocused() {
        this.commentFocus = true
      },
      commentBlurred() {
        this.commentFocus = false
      }
    },
    props: {
      /*html: {
        type: String,
        default: ''
      },*/
    }
  }
</script>

<style>
  .comment-item {
    position: relative;
    margin-right: 55px;
    margin-bottom: 15px;
  }

  .passageTitle {
    color: black;
    text-decoration: none;
  }

  .passageTitle:hover {
    color: black;
    text-decoration: underline;

  }

  .passage p {
    margin: 0 0 25px;
    display: block;
    font-size: 16px;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }

  @media (min-width: 768px) {
    .passage {
      width: 660px;
    }
  }

  @media (max-width: 768px) {
    .passage {
      width: 80%;
    }

  }

  .fade2-enter-active, .fade2-leave-active {
    transition: opacity .5s
  }

  .fade2-enter, .fade2-leave-to {
    opacity: 0
  }

  .passage {
    text-align: justify;
    margin: 47px auto 0;

  }

  .comment-list {
    display: block;
    text-align: justify;
    margin-bottom: 60px;
  }

  .passage h1 {
    font-size: 34px;
    text-align: justify;
  }

  .like-button {
    color: #50c87e;

  }

  .comment {
    margin-top: 50px;
  }

  .comment .el-textarea__inner {
    height: 50px !important;
  }

  .dislike-button {
    margin-left: 15px;
  }

  .passage-main {
    text-align: justify;
  }
</style>
