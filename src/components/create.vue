<template>
  <div>
    <mu-stepper :activeStep="activeStep" style="width: 50%;margin-left: 25%;" v-if="!isPhone">
      <mu-step>
        <mu-step-label @click.native="changeStep(0)">
          上传文件
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label @click.native="changeStep(1)">
          编辑一些细节
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label @click.native="changeStep(2)">
          选择设置密码
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label @click.native="changeStep(3)">
          完成
        </mu-step-label>
      </mu-step>
    </mu-stepper>
    <editor v-if="activeStep==1"/>
    <input type="file" v-if="activeStep==0"/>

  </div>
</template>

<script>
  import bus from '../bus.js'
  import editor from './editor.vue'

  export default {
    components: {
      editor
    },
    name: 'create',
    data() {
      return {
        activeStep: 0,
        clientWidth: 0
      }
    },
    computed: {
      isPhone() {
        return this.clientWidth <= 768
      },
    },
    methods: {
      changeStep(index) {
        this.activeStep = index
      }
    },
    mounted() {
      this.clientWidth = document.documentElement.clientWidth
      const that = this
      window.onresize = function temp() {
        that.clientWidth = document.documentElement.clientWidth
      }
    }
  }
</script>
