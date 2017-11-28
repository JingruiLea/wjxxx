<template>
  <div class="layout">
    <div class="content">
      <div class="body">
        <mu-card class="mainCard">
          <mu-card-title title="输入表单名字或编号" style="background-color: #2196f3;border-radius: 5px 5px 0 0;"/>
          <mu-card-text>
            <mu-text-field hintText="Table Name or Table ID" v-model="inputValue" @keyup.native.enter="next"
                           @input="keyUp" style="margin-bottom: 10px"/>
            <br/>
            <mu-text-field hintText="需要密码" v-model="password" @keyup.native.enter="next" :errorText="passwordErrorText"
                           v-if="needPassword"/>
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
        notFound: false
      }
    },
    methods: {
      keyUp() {
        this.axios.post(this.$url + '/table/needPassword', {idOrName: this.inputValue}).then(res => {
          if (res.data.status == 'Success') {
            this.notFound = false
            if (res.data.needPassword == true)
              this.needPassword = true
          } else {
            this.needPassword = false
            if (res.data.status == 'Not Found') {
              this.notFound = true
            }
          }
        }, err => {
          console.log('error fill.vue line-36-' + err.toString())
        })
      },
      next() {
        this.axios.post(this.$url + '/table', {idOrName: this.inputValue, password: this.password}).then(res => {
          console.log(JSON.stringify(res.data))
          if (res.data.status == 'Success') {
            bus.$emit('display', res.data.FormData)
            this.$router.push('display')
          } else if (res.data.status == 'Password Error') {

          }
        }, err => {
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

  .mu-text-field {
    width: 70%;
  }

  .mu-tabs {
    border-radius: 5px 5px 0 0;
  }

  .mu-card-text {
    margin-top: 7.64vw;
    margin-bottom: 12.36vw;
  }

  @media (max-width: 768px) {
    .mu-card {
      width: 80%;
      left: 10%;
      margin-top: 5%;
      border-radius: 5px;
    }

  }

  @media (min-width: 768px) {
    .mu-card {
      width: 40%;
      left: 30%;
      margin-top: 5%;
      border-radius: 5px;
    }

    .mu-card-text {

    }
  }
</style>
