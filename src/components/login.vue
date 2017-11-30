<template>
  <div>
    <mu-card-text style="margin-top:3vw" v-if="!needPassword"></mu-card-text>
    <mu-card-text>
      <mu-text-field icon="perm_identity" hintText="请输入用户名" label="用户名" v-model="inputValue" @keyup.native.enter="login"
                     :errorText="usernameErrorText"
                     @input="keyUp" labelFloat/>
      <transition name="fade">
        <mu-text-field class="passwordInput" hintText="请输入密码" icon="lock" label="需要密码" type="password"
                       this.passwordErrorText='请填写' v-model="password" @keyup.native.enter="login"
                       :errorText="passwordErrorText"
                       v-if="needPassword" labelFloat></mu-text-field>
      </transition>
    </mu-card-text>
    <mu-card-text style="margin-top:1vw"></mu-card-text>
    <mu-checkbox v-model="rememberMe" uncheckIcon="favorite_border" checkedIcon="favorite"
                 label="记住我的登录状态"></mu-checkbox>
    <mu-card-text style="margin-top:3vw"></mu-card-text>
    <mu-card-actions>
      <mu-raised-button @click="login" label="登录" style="margin-bottom: 10px" primary/>
    </mu-card-actions>
  </div>
</template>


<script>
  import bus from "../bus.js";

  export default {
    name: 'loginCard',
    data() {
      return {
        rememberMe: false,
        inputValue: '',
        password: '',
        needPassword: false,
        passwordErrorText: '',
        notFound: false,
        usernameErrorText: '',
      }
    },
    methods: {
      keyUp() {
        if (this.inputValue != '') {
          this.axios.post(this.$url + '/user/needPassword', {username: this.inputValue}).then(res => {
            console.log(res.data.status == 'Success')
            console.log(JSON.stringify(res.data))
            if (res.data.status == 'Success') {
              this.notFound = false
              this.usernameErrorText = ''
              if (res.data.needPassword == true)
                this.needPassword = true
            } else {
              this.needPassword = false
              if (res.data.status == 'Not Found') {
                this.notFound = true
                this.usernameErrorText = ''
              }
            }
          }, err => {
            console.log('error login.vue line-90-' + err.toString())
          })
        }
      },
      login() {
        if (this.inputValue == '') {
          this.userNameErrorText = '请填写'
          return
        } else {
          this.userNameErrorText = ''
        }
        if (this.needPassword == true && this.password == '') {
          this.passwordErrorText = '请填写'
          return
        } else {
          this.passwordErrorText = ''
        }
        this.axios.post(this.$url + '/user/login', {
          username: this.inputValue,
          password: this.password,
          rememberMe: this.rememberMe
        }).then(res => {
          console.log(JSON.stringify(res.data))
          if (res.data.status == 'Success') {
            bus.$emit('login', res.data.userdata)
            this.$router.push('user')
          } else if (res.data.status == 'Password Error') {
            this.passwordErrorText = '密码错误'
          } else {
            this.passwordErrorText = ''
          }
        }, err => {
          this.passwordErrorText = '服务器错误，请联系作者'
          console.log('error login.vue line-119-' + err.toString())
        })

      }
    }
  }
</script>
