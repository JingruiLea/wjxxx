<template>
  <el-tag
    closable
    v-if="hasTag"
    :disable-transitions="false"
    @close="handleClose"
  >
    {{initNote}}
  </el-tag>
  <el-input
    v-else-if="inputVisible"
    class="input-new-note el-input--small"
    ref="newNoteInput"
    v-model="inputValue"
    @keyup.enter.native="handleInputConfirm"
    @blur="handleInputConfirm"></el-input>
  <el-button
    v-else
    class="buttonnewtag"
    size="small"
    @click="showInput">
    添加备注
  </el-button>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    name: 'etLabel',
    data() {
      return {
        inputVisible: false,
        inputValue: '',
        hasTag: true,
        initNote: this.note
      }
    },
    props: ["note"],
    watch: {
      initNote: function (newNote) {
        this.$emit('update:note', newNote)
      }
    },
    methods: {
      handleClose: function () {
        this.hasTag = false
        this.inputVisible = false
        this.initNote = ''
      },
      handleInputConfirm: function () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.initNote = inputValue
          this.hasTag = true
        }
        this.inputVisible = false
        this.inputValue = ''
      },
      showInput: function () {
        this.showButton = false
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.newNoteInput.$refs.input.focus()
        })
      }
    }
  }
</script>

<style scoped>
  .buttonnewtag {
    margin-left: 0 !important;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-note {
    border: none;
    border-radius: 3px !important;
    background: #fff !important;
    width: 90px;
    margin-left: 2px;
    vertical-align: bottom;
  }
</style>
