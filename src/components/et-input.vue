<template>
  <div>
    <et-label :note.sync="copyNote" class="el-form-item__label"/>
    <el-button size="mini" type="primary" @click="up" icon="el-icon-arrow-up" class="hideButton"></el-button>
    <el-button size="mini" type="primary" @click="down" icon="el-icon-arrow-down" class="hideButton"></el-button>
    <el-button size="mini" type="danger" @click="del" icon="el-icon-close" class="hideButton"></el-button>
    <el-input ref="newTitleInput" :placeholder="copyPlaceHolder" @blur="handleInputConfirm" v-model="inputValue"
              @keyup.enter.native="handleInputConfirm" auto-complete="off">
      <et-i :class.sync="copyIcon" slot="prefix"></et-i>
    </el-input>
  </div>
</template>

<script>
  import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue'
  import EtLabel from './et-label.vue'
  import EtI from './et-i.vue';

  export default {
    components: {
      EtI,
      EtLabel,
      ElInput
    },
    name: 'etInput',
    data() {
      return {
        inputValue: '',
        copyPlaceHolder: this.placeholder,
        copyIcon: this.icon + ' el-input__icon',
        copyNote: this.note,
      }
    },
    props: ['placeholder', 'icon', 'note'],
    watch: {
      copyPlaceHolder: function (newPlaceHolder) {
        this.$emit('update:placeholder', newPlaceHolder)
      },
      copyIcon: function (newIcon) {
        this.$emit('update:icon', newIcon)
      }
    },
    methods: {
      up() {
        this.$emit('up')
      },
      down() {
        this.$emit('down')
      },
      del() {
        this.$emit('del')
      },
      handleInputConfirm: function () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.copyPlaceHolder = inputValue
        }
        this.inputValue = ''
      }
    }
  }
</script>

<style scoped>
  .el-input__inner:focus + .el-input__prefix > .el-input__icon {
    color: #00b4ef;
  }

  .el-input-group__prepend i {
    font-size: 17px;
    color: #c8c8c8;
    transition: all 0.5s ease 0s;
    width: 13px;
  }

</style>
