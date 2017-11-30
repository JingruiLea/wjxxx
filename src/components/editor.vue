<template>
  <el-container>
    <el-header>
      <et-title :title.sync="FormData[0].title"/>
    </el-header>
    <el-main min-height="50vh">
      <el-form>
        <el-col :md="{span:18,offset:3}">
          <el-form-item v-for="(data,index) in FormData" :key="index">
            <et-radio
              @up="up(index)" @down="down(index)" @del="del(index)"
              v-if="data.type=='radio'"
              :note.sync="data.note" :choices.sync="data.choices"
            ></et-radio>
            <et-input
              @up="up(index)" @down="down(index)" @del="del(index)"
              v-else-if="data.type=='input'" :note.sync="data.note"
              :placeholder.sync="data.placeholder" :icon.sync="data.icon"
            ></et-input>
            <et-checkbox
              @up="up(index)" @down="down(index)" @del="del(index)"
              v-else-if="data.type=='checkBox'" :note.sync="data.note"
              :choices.sync="data.choices"
            ></et-checkbox>
          </el-form-item>
        </el-col>
      </el-form>
    </el-main>
    <el-row>
      <el-col :xs="24" :md="8">
        <el-radio-group class="addSelect" v-model="selectValue">
          <el-radio :label="1">单选</el-radio>
          <el-radio :label="2">多选</el-radio>
          <el-radio :label="3">填空</el-radio>
        </el-radio-group>
      </el-col>
      <transition name="el-zoom-in-top">
        <el-col :xs="24" :ls="12" :span="12" :md="6" class="addInput" v-show="selectValue=='2'||selectValue=='3'">
          <label class="addLabel">{{minLabel}}</label>
          <el-input-number v-model="minnum" controls-position="right" size="medium" :min="0"></el-input-number>
        </el-col>
      </transition>
      <transition name="el-zoom-in-top">
        <el-col :xs="24" :span="12" :ls="12" :md="6" class="addInput" v-show="selectValue=='2'||selectValue=='3'">
          <label class="addLabel">{{maxLabel}}</label>
          <el-input-number v-model="maxnum" controls-position="right" size="medium" :min="0"></el-input-number>
        </el-col>
      </transition>
      <el-button class="addButton" type="primary" @click="add" round>添加</el-button>
      <el-button class="addButton" type="primary" @click="submit" round>完成</el-button>
    </el-row>
    <mu-toast v-if="toast" :message="message" @close="hideToast"/>
  </el-container>
</template>

<script>
  import etTitle from './et-title.vue'
  import etInput from './et-input.vue'
  import etLabel from './et-label.vue'
  import etCheckbox from './et-checkBox.vue'
  import etRadio from './et-radio.vue'
  import etPlaceholder from './et-placeholder.vue'
  import Vue from 'vue'
  import bus from '../bus.js'

  export default {
    components: {
      etCheckbox,
      etRadio,
      etPlaceholder,
      etTitle,
      etInput,
      etLabel
    },
    name: 'app',
    data() {
      return {
        toast: false,
        message: '',
        FormData: [{title: '110'},
          {type: 'input', note: '你的姓名', placeholder: '在此输入内容将修改背景文字', icon: 'fa fa-cube', min: 0, max: 0},
          {type: 'radio', note: '性别', choices: ['男', '女', '其他']},
          {type: 'checkBox', note: '喜欢的水果', choices: ['香蕉', '苹果', '小米'], min: 0, max: 0}],
        selectValue: 0,
        minnum: 0,
        maxnum: 0
      }
    },
    methods: {
      showToast(message) {
        this.message = message
        this.toast = true
        if (this.toastTimer) clearTimeout(this.toastTimer)
        this.toastTimer = setTimeout(() => {
          this.toast = false
        }, 2000)
      },
      hideToast() {
        this.toast = false
        if (this.toastTimer) clearTimeout(this.toastTimer)
      },
      submit() {
        bus.FormData = this.FormData.slice(0)
        this.axios.post(this.$url + '/table/create', {
          name: '',
          password: this.password,
          uuid: bus.FormData[0].id,
          FormData: JSON.stringify(bus.FormData)
        }).then(res => {
          console.log(JSON.stringify(res.data))
          if (res.data.status == 'Success') {
            showToast('Success')
          } else if (res.data.status == 'Failed') {
            showToast('Failed')
          } else if (res.data.status == 'Internal Error') {
            showToast('Internal Error')
          }
        }, err => {
          console.log('error login.vue line-90-' + err.toString())
        })
      },
      add() {
        var radio = {type: 'radio', note: '性别', choices: ['男', '女', '其他']}
        var checkBox = {type: 'checkBox', note: '喜欢的水果', choices: ['香蕉', '苹果', '小米'], min: 0, max: 0}
        var input = {type: 'input', note: '你的姓名', placeholder: '在此输入内容将修改背景文字', icon: 'fa fa-cube', min: 0, max: 0}
        switch (this.selectValue) {
          case 1:
            this.FormData.push(radio)
            radio = {type: 'radio', note: '性别', choices: ['男', '女', '其他']}
            break
          case 2:
            checkBox.min = this.minnum
            checkBox.max = this.maxnum
            this.FormData.push(checkBox)
            checkBox = {type: 'checkBox', note: '喜欢的水果', choices: ['香蕉', '苹果', '小米'], min: 0, max: 0}
            break
          case 3:
            input.max = this.maxnum
            input.min = this.minnum
            this.FormData.push(input)
            input = {type: 'input', note: '你的姓名', placeholder: '在此输入内容将修改背景文字', icon: 'fa fa-cube', min: 0, max: 0}
            break
        }
        this.selectValue = 0
      },
      up: function (index) {
        if (index > 1) {
          let temp = this.FormData[index]
          Vue.set(this.FormData, index, this.FormData[index - 1])
          Vue.set(this.FormData, index - 1, temp)
        }
      },
      down: function (index) {
        if (index < this.FormData.length - 1) {
          let temp = this.FormData[index]
          Vue.set(this.FormData, index, this.FormData[index + 1])
          Vue.set(this.FormData, index + 1, temp)
        }
      },
      del: function (index) {
        this.FormData.splice(index, 1);
      }
    },
    computed: {
      minLabel: function () {
        if (this.selectValue == '2') {
          return '最少选几个'
        }
        if (this.selectValue == '3') {
          return '最少字数'
        }
      },
      maxLabel: function () {
        if (this.selectValue == '2') {
          return '最多选几个'
        }
        if (this.selectValue == '3') {
          return '最多字数'
        }
      }
    },

  }
</script>
