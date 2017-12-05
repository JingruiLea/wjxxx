<template>
  <div style="background: #f3f3f3;padding-top: 30px;min-height: 720px;">
    <div class="container">
      <transition name="fade2">
        <mu-paper class="title-paper in-list" :zDepth="1" v-if="titleVisible">
          <mu-content-block>
            <div style="position: relative;margin-right: 9px;margin-bottom: 15px">
              <a class="close" href="/#/feedback" @click="titleVisible=!titleVisible">Close</a>
              <b style="font-size:16px;font-weight: 600;">👋想要给作者留言么?</b>
              <p style="color: #24292e;">如果你发现了本站的Bug或者有好的建议,可以在这里留言.<br/>
                当然,你也可以把这里作为一个论坛.</p>
            </div>
          </mu-content-block>
        </mu-paper>
      </transition>
      <mu-paper class="choose-paper in-list" :zDepth="1">
        <mu-content-block>
          <transition name="fade2" mode="out-in">
            <div v-if="!notepadVisible" key="1">
              <mu-flat-button label="写留言" icon=":fa fa-pencil-square-o" @click="leaveNote" primary/>
              <mu-flat-button label="写留言" icon=":fa fa-pencil-square-o" @click="leaveNote" primary/>
              <mu-flat-button label="写留言" icon=":fa fa-pencil-square-o" @click="leaveNote" primary/>
              <mu-flat-button label="写留言" icon=":fa fa-pencil-square-o" @click="leaveNote" primary/>
            </div>
            <div v-else key="2" style="text-align: justify">
              <h3 style="display: inline">{{editStatus != 'Markdown' ? '普通编辑器   ' : 'Markdown编辑器   '}}</h3>
              <mu-flat-button label="收起" icon=":fa fa-arrow-up" @click="leaveNote" primary></mu-flat-button>
              <mu-flat-button :label="editStatus=='Markdown'?'切换到普通编辑器':'切换到Markdown编辑器'" icon=":fa fa-exchange"
                              @click="switchEditor" primary></mu-flat-button>
              <mu-flat-button icon=":fa fa-expand" @click="fullscreen" primary style="float: right"></mu-flat-button>
              <mu-raised-button label="提交" icon=":fa fa-check" @click="submitPassage" secondary
                                style="float: right"></mu-raised-button>
            </div>
          </transition>
        </mu-content-block>
        <transition name="fade2">
          <mu-content-block v-show="notepadVisible">
            <!--transition name="fade2" mode="out-in"-->
            <div v-show="editStatus=='richText'" id="editorElem" style="text-align:left"></div>
            <!--/transition-->
            <!--transition name="fade2" mode="out-in"-->
            <mu-content-block v-show="editStatus=='Markdown'"
                              style="height: 50vh;position: relative;clear: both;display:block;margin-bottom: 15px;">
              <textarea
                id="markdown-editor"
                type="textarea"
                autosize
                v-model="MarkdownText"
                @input="marked">
              </textarea>
              <!--textarea id="markdown-editor" v-model="MarkdownText"/-->
              <div id="preview" v-html="MarkedText">
              </div>
            </mu-content-block>
            <!--/transition-->
          </mu-content-block>
        </transition>
      </mu-paper>
      <passage-list/>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  import E from 'wangeditor'
  import highlight from 'highlight.js'
  import 'highlight.js/styles/arduino-light.css'
  import passageList from './passageList.vue'
  import PassageCard from "./passageCard.vue";

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return highlight.highlightAuto(code).value;
    }
  });
  export default {
    components: {
      PassageCard,
      passageList
    },
    data() {
      return {
        titleVisible: true,
        notepadVisible: false,
        editorContent: '',
        editStatus: 'richText',
        MarkdownText: '# Markdown编辑器\n' +
        '```\n' +
        'public static void main(){\n' +
        '}\n' +
        '```',
        MarkedText: ''
      }
    },
    methods: {
      submitPassage() {
        this.axios.post(this.$url + '/feedback/addNote', {username: this.inputValue, note: ''})
          .then(res => {
            console.log(res.data.status == 'Success')
            console.log(JSON.stringify(res.data))
            if (res.data.status == 'Success') {
              this.notFound = false
              this.usernameErrorText = ''
              if (res.data.needPassword == true)
                this.needPassword = true
            } else {
              this.needPassword = false
              if (res.data.status == 'Not Found') {
                this.notFound = true
                this.usernameErrorText = ''
              }
            }
          })
      },
      marked() {
        this.MarkedText = marked(this.MarkdownText);
      },
      fullscreen() {

      },
      leaveNote() {
        this.notepadVisible = !this.notepadVisible;
      },
      switchEditor() {
        this.editStatus = ((this.editStatus == 'richText') ? 'Markdown' : 'richText')
      }
    },
    mounted() {
      this.MarkedText = marked(this.MarkdownText);
      var editor = new E('#editorElem')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()

    }
  }
</script>

<style>
  #preview {
    position: absolute;
    display: inline-block;
    background: #f3f5f6;
    width: 49%;
    height: 100%;
    border-radius: 0px 5px 5px 0px;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
    top: 0;
    overflow-y: scroll;
    left: 49%;
    text-align: left;
  }

  #preview h1 {
    border: none;
    text-align: center;
    font-size: 32px;
    padding-bottom: 0;
    margin: auto;
  }

  pre {
    background: #E2E2E2;
    border-radius: 3px;
  }

  #markdown-editor {
    position: absolute;
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    border: none;
    border-radius: 5px 0px 0px 5px;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
    top: 0;
    left: 0;
    border-right: 1px solid #ccc;
  }

  .container {
    height: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    text-decoration: none;
  }

  .close:hover {
    text-decoration: underline;
  }

  .title-paper {
    margin-top: 30px;
    padding-top: 10px;
  }

  .in-list {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
      height: 100%;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
      height: 100%;
    }

  }

  .fade2-enter-active, .fade2-leave-active {
    transition: opacity .5s
  }

  .fade2-enter, .fade2-leave-to {
    opacity: 0
  }
</style>
