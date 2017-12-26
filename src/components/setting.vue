<template>
  <div class="container">
    <mu-paper class="setting-paper">
      <h2 style="margin-bottom: 30px;">设置主题</h2>
      <div onclick="setTheme(0)" style="display: inline-block;cursor: pointer;margin-right: 8px;margin-bottom: 8px;">
        <div style="background-color: #2196f3;width: 100px;height: 100px;border-radius: 10px;"></div>
        <p>Default</p></div>
      <div onclick="setTheme(1)" style="display: inline-block;cursor: pointer;margin-bottom: 8px;">
        <div style="background-color: #7e57c2;width: 100px;height: 100px;border-radius: 10px;"></div>
        <p>Purple</p></div>
      <br/>
      <div onclick="setTheme(2)" style="display: inline-block;cursor: pointer;margin-right: 8px;">
        <div style="background-color: #474a4f;width: 100px;height: 100px;border-radius: 10px;"></div>
        <p>Carbon</p></div>
      <div onclick="setTheme(3)" style="display: inline-block;cursor: pointer;">
        <div style="background-color: #009688;width: 100px;height: 100px;border-radius: 10px;"></div>
        <p>Teal</p></div>
    </mu-paper>
    <mu-paper class="setting-paper">
      <h2 style="margin-bottom: 30px;">设置背景</h2>
      <p>上传一张图片，作为你的表单背景</p>
      <a href="/#/create" class="file">
        <input type="file" style="cursor: pointer;" @change="onFileChange"/>
        选择背景图片
      </a>
      <br/>
      <img :src="background" alt="图片预览" style="margin-top: 20px;max-width: 130px;height: auto;"/>
    </mu-paper>
    <mu-paper class="setting-paper">
      <h2 style="margin-bottom: 30px;">设置密码</h2>
      <mu-checkbox v-model="needPassword" label="需要密码"/>
      <br/>
      <mu-text-field v-if="needPassword" v-model="password" label="您的密码" style="text-align: justify;margin-top: 20%;"
                     labelFloat/>
      <mu-raised-button label="完成" @click="next" style="display: block;margin:100px auto 0;" primary/>
    </mu-paper>
  </div>
</template>

<script>

  export default {
    name: 'setting',
    data() {
      return {
        needPassword: false,
        password: '',
        background: '',
        theme: 0
      }
    },
    methods: {
      setTheme(index) {

      },
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files
        var imageType = /^image\//
        if (!files.length)
          return;
        if (!imageType.test(files[0].type)) {
          e.target.value = ''
          this.background = ''
          alert("请选择图片！")
          return;
        }
        this.createImage(files[0]);
      },
      createImage(file) {
        var reader = new FileReader()
        const that = this
        reader.onload = (e) => {
          that.background = e.target.result
        };
        reader.readAsDataURL(file)
      },
      next() {
        this.$emit('next')
      }
    },

  }
</script>
<style>
  .setting-paper {
    display: inline-block;
    vertical-align: top;
    width: 28%;
    height: 60vh;
    padding: 10px;
  }

  .setting-paper + .setting-paper {
    margin-left: 15px;
  }

  .file {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    cursor: pointer;
  }

  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }

  .file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
  }
</style>
