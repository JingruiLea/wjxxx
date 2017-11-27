<template>
  <div @dblclick="dialogVisible = true" :class="copyClass">
    <el-dialog v-show="dialogVisible"
               title="选择图标"
               :visible.sync="dialogVisible"
               width="50%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible=false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'etI',
    data() {
      return {
        copyClass: this.class,
        dialogVisible: false
      }
    },
    prop: ['class'],
    watch: {
      copyClass: function (newIcon) {
        this.$emit('update:class', newIcon)
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .input-new-title {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    width: 70px;
    color: #5a5e66;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
