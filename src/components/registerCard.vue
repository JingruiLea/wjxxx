<template>
  <div>
    <mu-card-text>
      <mu-text-field icon="perm_identity" hintText="请输入用户名" label="用户名" v-model="inputValue"
                     @keyup.native.enter="register" :errorText="usernameErrorText"
                     @input="keyUp" labelFloat/>
      <br/>
      <mu-switch label="需要密码" v-model="needPassword" class="demo-switch"/>
      <br/>
      <transition name="fade">
        <mu-text-field class="passwordInput" hintText="请输入密码" @input="checkPassword1" icon="lock" label="需要密码"
                       type="password"
                       v-model="password"
                       :errorText="passwordErrorText"
                       v-if="needPassword" labelFloat></mu-text-field>
      </transition>
      <transition name="fade">
        <mu-text-field class="passwordInput" hintText="请再次输入密码" @input="checkPassword2" icon="lock" label="重复密码"
                       type="password"
                       v-model="passwordRepeat" @keyup.native.enter="register"
                       :errorText="passwordRepeatErrorText"
                       v-if="needPassword" labelFloat></mu-text-field>
      </transition>
    </mu-card-text>
    <transition name="fade">
      <mu-card-text v-if="!needPassword"
                    style="text-align: center;color: red;width: 50%;margin-left:25%;">
        不需要密码的账户使登录更加快捷,却降低了账号的安全度。请保存好您的账号。
      </mu-card-text>
    </transition>
    <mu-card-actions>
      <mu-raised-button @click="register" label="注册" style="margin-bottom: 10px" primary/>
    </mu-card-actions>
  </div>
</template>

<script>

  import bus from "../bus.js";

  export default {
    name: 'registerCard',
    data() {
      return {
        inputValue: '',
        password: '',
        passwordRepeat: '',
        needPassword: false,
        passwordErrorText: '',
        usernameErrorText: '',
        passwordRepeatErrorText: '',
        topPopup: false,
        passwordOk: false
      }
    },
    methods: {
      checkPassword1() {
        if (this.inputValue == '') {
          this.usernameErrorText = '请填写'
        } else {
          this.usernameErrorText = ''
        }
        if (this.password == '') {
          this.passwordErrorText = '请填写'
        } else {
          this.passwordErrorText = ''
        }
        if (this.password.length < 6) {
          this.passwordErrorText = '嘿嘿,密码长度不能小于6位'
          return
        }
        if (this.password.length > 6) {
          this.passwordErrorText = '嘿嘿,密码长度不能大于6位'
          return
        }
        this.passwordErrorText = ''
      },
      checkPassword2() {
        if (this.password !== this.passwordRepeat) {
          this.passwordErrorText = '两次输入密码不同'
          this.passwordRepeatErrorText = '两次输入密码不同'
          this.passwordOk = false
        } else {
          this.passwordErrorText = ''
          this.passwordRepeatErrorText = ''
          this.passwordOk = true
        }
      },
      keyUp() {
        if (this.inputValue != '') {
          this.axios.post(this.$url + '/user/hasRepeat', {username: this.inputValue}).then(res => {
            console.log(JSON.stringify(res.data))
            if (res.data.status == 'Success') {
              this.usernameErrorText = '这个名字已经有人用啦'
            } else if (res.data.status == 'Not Found') {
              this.usernameErrorText = ''
            } else if (res.data.status == 'Internal Error') {
              this.usernameErrorText = '服务器内部错误'
            }
          }, err => {
            console.log('error login.vue line-90-' + err.toString())
          })
        }
      },
      register() {
        checkPassword1()
        checkPassword2()
        keyUp()
        if (this.passwordOk) {
          this.axios.post(this.$url + '/user/register', {
            username: this.inputValue,
            password: this.password,
          }).then(res => {
            console.log(JSON.stringify(res.data))
            if (res.data.status == 'Success') {
              bus.$emit('register', res.data.userdata)
              this.$router.push('user')
            } else if (res.data.status == 'Username Repeat') {
              this.usernameErrorText = '这个名字已经有人用啦'
            } else if (res.data.status == 'Internal Error') {
              this.usernameErrorText = '服务器错误，请联系作者'
            }
          }, err => {
            this.usernameErrorText = '服务器错误，请联系作者'
            console.log('error login.vue line-119-' + err.toString())
          })
        }
      },
    }

  }
</script>
