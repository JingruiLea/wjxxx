<template>
  <div>
    <el-row>
      <et-label :note.sync="copyNote" class="el-form-item__label"/>
      <el-button size="mini" type="primary" @click="up" icon="el-icon-arrow-up" class="hideButton"></el-button>
      <el-button size="mini" type="primary" @click="down" icon="el-icon-arrow-down" class="hideButton"></el-button>
      <el-button size="mini" type="danger" @click="del" icon="el-icon-close" class="hideButton"></el-button>
    </el-row>
    <el-row>
      <div class="et-radio" :key="tag"
           v-for="tag in dynamicTags">
        <el-checkbox></el-checkbox>
        <el-tag
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
      </div>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      ></el-input>
      <el-button v-else class="buttonnewtag" size="small" @click="showInput">新选项</el-button>
    </el-row>
  </div>
</template>

<script>
  import EtLabel from "./et-label.vue";

  export default {
    components: {EtLabel},
    name: 'etCheckbox',
    data() {
      return {
        dynamicTags: this.choices,
        inputVisible: false,
        inputValue: '',
        copyNote: this.note,
      };
    },
    props: ['note', 'choices', 'max', 'min'],
    watch: {
      copyNote: function (newNote) {
        this.$emit('update:note', newNote)
      },
      dynamicTags: function (newAry) {
        this.$emit('update:choices', newAry)
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      up() {
        this.$emit('up')
      },
      down() {
        this.$emit('down')
      },
      del() {
        this.$emit('del')
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
        this.$emit('choicesModify', this.dynamicTags)
      }
    }
  }
</script>

<style scoped>
  .et-radio {
    width: 100px;
    display: inline;
  }

  .et-radio + .et-radio {
    margin-left: 10px;
  }

  .buttonnewtag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
