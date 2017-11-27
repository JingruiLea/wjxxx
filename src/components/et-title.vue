<template>
  <el-row type="flex" justify="center">
    <h1 @dblclick="editTitle" v-show="!editing">{{title}}</h1>
    <el-input v-show="editing" class="input-new-title" ref="newTitleInput" v-model="inputValue"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"></el-input>
  </el-row>
</template>

<script>
  export default {
    name: 'etTitle',
    data() {
      return {
        inputValue: '',
        editing: false,
        copyTitle: this.title
      }
    },
    props: ['title'],
    watch: {
      copyTitle: function (newTitle) {
        this.$emit('update:title', newTitle)
      }
    },
    methods: {
      editTitle: function () {
        this.editing = true
        this.$nextTick(_ => {
          this.$refs.newTitleInput.$refs.input.focus()
        })
      },
      handleInputConfirm: function () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.copyTitle = inputValue
        }
        this.editing = false
        this.inputValue = ''
      }
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
    font-size: 36px;
    padding-bottom: 9px;
    margin: 20px 0px 20px 0px;
    border-bottom: 1px solid #eee;
  }

  .input-new-title {
    font-size: 36px;
    padding-bottom: 9px;
    margin: 20px 0px 20px 0px;
    border-bottom: 1px solid #eee;
    height: 36px;
    width: 40%;
  }
</style>
