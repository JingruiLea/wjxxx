<template>
  <div>
    <el-container v-if="FormData.length==0">
      <el-main>
        <el-row type="flex" justify="center">
          <h1>出错啦！！！！</h1>
        </el-row>
      </el-main>
    </el-container>
    <el-container direction="vertical" v-else>
      <el-header>
        <el-col :md="{span:18,offset:3}">
          <h1>{{FormData[0].title}}</h1>
        </el-col>
      </el-header>
      <el-main>
        <el-form content="text/plain">
          <el-row type="flex" justify="center" style="min-height: 60vh;">
            <el-col :md="12" :xs="24">
              <el-form-item v-for="(data,index) in FormData" :key="index">
                <el-row>
                  <span v-if="data.note!=''" class="el-form-item__label">{{data.note}}</span>
                </el-row>
                <el-input v-model="Form['input'+index]" v-if="data.type=='input'"
                          auto-complete="off" :placeholder="data.placeholder" :maxlength="data.max==0?100000:data.max"
                          :minlength="data.min">
                  <i :class="data.icon" slot="prefix"></i>
                </el-input>
                <div v-else-if="data.type=='radio'">
                  <el-radio :mychecked="mychecked" @change="mychecked=!mychecked"
                            v-for="(choice,index2) in data.choices" v-model="Form['radio'+index]" :label="choice"
                            :key="index2"></el-radio>
                </div>
                <el-checkbox-group v-else-if="data.type=='checkBox'" v-model="Form['checkBox'+index]"
                                   :max="data.max==0?100000:data.max" :min="data.min">
                  <el-checkbox v-for="(choice,index3) in data.choices" :key="index3"
                               :label="choice" :checked="checked" @change="checked=!checked"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>
          <hr/>
          <el-form-item>
            <el-row type="flex" justify="center">
              <el-button type="primary" @click="submit" :disabled="preview" round>完成!</el-button>
            </el-row>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  //v-model="Form['checkBox'+index]" :max="data.max==0?100000:data.max" :min="data.min"
  import ElCheckboxGroup from "../../node_modules/element-ui/packages/checkbox/src/checkbox-group.vue";

  export default {
    components: {ElCheckboxGroup},
    name: 'display',
    data() {
      return {
        FormData: [],
        i: 0,
        preview: false,
        clientWidth: 0,
        Form: {},
        checked: false,
        mychecked: false
      }
    },
    computed: {},
    watch: {
      clientWidth() {
        console.log(JSON.stringify(this.Form))
      },
    },
    methods: {
      submit: function () {
        this.$ajax.post(this.$url + '/table/submit', JSON.stringify(this.Form), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {

        }, error => {

        })
      }
    },
    mounted() {
      this.clientWidth = document.documentElement.clientWidth
      const that = this
      window.onresize = function temp() {
        that.clientWidth = document.documentElement.clientWidth
      }

      this.$ajax.get(this.$url + '/table?id=' + this.$route.query.id, {}).then(res => {
        console.log('服务器回复' + JSON.stringify(res.data))
        that.FormData = res.data.slice(0)
        var index
        for (index in that.FormData) {
          if (that.FormData[index].type == 'input') {
            that.i++
            that.Form['input' + this.i] = ''
          } else if (that.FormData[index].type == 'radio') {
            that.i++
            that.Form['radio' + this.i] = ''
          } else if (that.FormData[index].type == 'checkBox') {
            that.i++
            that.Form['checkBox' + this.i] = []
          }
          that.Form['id'] = that.FormData[0]['id']
          console.log('Form内容' + JSON.stringify(that.Form))
        }
      }, err => {
      })
    }
  }
</script>

<style scoped>
  .el-input__inner {
    background: #f0f0f0;
    border: none;
    border-radius: 20px;
    padding-left: 40px !important;
    box-shadow: none;
    height: 40px;
    padding: 0px;
    transition: all 0.3s ease 0s;
  }

  .el-input__inner:focus {
    background: #e0e0e0;
    box-shadow: none;
    outline: 0 none;
  }

  .el-input-group__prepend i {
    font-size: 17px;
    color: #c8c8c8;
    transition: all 0.5s ease 0s;
    width: 13px;
  }

  .el-input__suffix {
    right: 0px;
  }
</style>
