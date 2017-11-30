<template>
  <div class="layout">
    <div class="content">
      <div class="body mainCard">
        <mu-card>
          <mu-card-title title="输入表单名字或编号" style="background-color: #2196f3;border-radius: 5px 5px 0 0;"/>
          <mu-card-text>
            <mu-text-field hintText="名字或编号" v-model="inputValue" @keyup.native.enter="next"
                           :errorText="idOrNameErrorText"
                           @input="keyUp" style="margin-bottom: 10px"/>
            <br/>
            <transition name="fade">
              <mu-text-field hintText="请输入密码" label="需要密码" type="password" this.passwordErrorText='请填写'
                             v-model="password" @keyup.native.enter="next" :errorText="passwordErrorText"
                             v-if="needPassword" labelFloat/>
            </transition>
          </mu-card-text>
          <mu-card-actions>
            <mu-raised-button @click="next" label="下一步" style="margin-bottom: 10px" primary/>
          </mu-card-actions>
        </mu-card>
      </div>
    </div>
  </div>
</template>
<script>

  import bus from "../bus.js";

  export default {
    data() {
      return {
        inputValue: '10086110',
        password: '',
        needPassword: false,
        passwordErrorText: '',
        notFound: false,
        idOrNameErrorText: ''
      }
    },
    methods: {
      keyUp() {
        if (this.inputValue != '') {
          this.axios.post(this.$url + '/table/needPassword', {idOrName: this.inputValue}).then(res => {
            console.log(res.data.status == 'Success')
            console.log(JSON.stringify(res.data))
            if (res.data.status == 'Internal Error') {
              this.idOrNameErrorText = '服务器错误'
            }
            if (res.data.status == 'Success') {
              this.idOrNameErrorText = ''
              this.notFound = false
              if (res.data.needPassword == true)
                this.needPassword = true
            } else {
              this.needPassword = false
              if (res.data.status == 'Not Found') {
                this.notFound = true
                this.idOrNameErrorText = '没有此表单'
              } else {
                this.idOrNameErrorText = ''
              }
            }
          }, err => {
            console.log('error fill.vue line-36-' + err.toString())
          })
        }
      },
      next() {
        if (this.inputValue == '') {
          this.idOrNameErrorText = '请填写'
          return
        } else {
          this.idOrNameErrorText = ''
        }
        if (this.needPassword == true && this.password == '') {
          this.passwordErrorText = '请填写'
          return
        } else {
          this.passwordErrorText = ''
        }
        this.axios.post(this.$url + '/table', {idOrName: this.inputValue, password: this.password}).then(res => {
          console.log(JSON.stringify(res.data))
          if (res.data.status == 'Success') {
            bus.$emit('display', res.data.FormData)
            this.$router.push('display')
          } else if (res.data.status == 'Password Error') {
            this.passwordErrorText = '密码错误'
          } else if (res.data.status == 'Internal Error') {
            this.idOrNameErrorText = '服务器错误，请联系作者'
          } else {
            this.passwordErrorText = ''
          }
        }, err => {
          this.idOrNameErrorText = '服务器错误，请联系作者'
          console.log('error fill.vue line-43-' + err.toString())
        })

      }
    }
  }
</script>
<style>
  .mu-card-title-container .mu-card-title {
    color: #ffffff;
  }

  .cardTitle {
    font-size: 20px !important;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .mu-text-field {
    width: 70%;
  }

  .mainCard .mu-text-field-input {
    font-size: 3.8vmin;
    font-family: 华文楷体;
    text-align: center;
  }
  .mu-tabs {
    border-radius: 5px 5px 0 0;
  }

  .mainCard .mu-card-text {
    margin-top: 7.64vw;
    margin-bottom: 12.36vw;
  }

  @media (max-width: 768px) {
    .mainCard .mu-card {
      width: 80%;
      left: 10%;
      margin-top: 5%;
      border-radius: 5px;
    }
  }

  @media (min-width: 768px) {
    .mainCard .mu-card {
      width: 40%;
      left: 30%;
      margin-top: 5%;
      border-radius: 5px;
    }

    .mu-card-text {

    }
  }
</style>
