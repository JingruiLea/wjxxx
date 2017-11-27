<template>
  <div class="el-form-item">
    <el-input ref="newTitleInput" :placeholder="title" @blur="handleInputConfirm" v-model="inputValue"
              @keyup.enter.native="handleInputConfirm" auto-complete="off" prefix-icon="fa fa-user">
    </el-input>
  </div>
</template>

<script>
  export default {
    name: 'etPlaceholder',
    data() {
      return {
        inputValue: '',
        title: '在这里输入的内容将显示为背景文字,以提示用户输入'
      }
    },
    methods: {
      handleInputConfirm: function () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.title = inputValue
        }
        this.inputValue = ''
      }
    }
  }
</script>

<style scoped>

</style>
