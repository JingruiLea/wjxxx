<template>
  <div class="layout">
    <div class="content">
      <div class="body loginCard">
        <mu-card id="loginCard">
          <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="login" title="登录"/>
            <mu-tab value="register" title="注册"/>
          </mu-tabs>
          <login-card v-if="isLogin"/>
          <register-card v-else/>
        </mu-card>
      </div>
    </div>
  </div>
</template>
<script>
  import LoginCard from './loginCard.vue'
  import RegisterCard from './registerCard.vue'
  import bus from "../bus.js";

  export default {
    components: {RegisterCard, LoginCard},
    data() {
      return {
        activeTab: 'login'
      }
    },
    computed: {
      isLogin() {
        return this.activeTab == 'login'
      }
    },
    methods: {
      handleTabChange(val) {
        this.activeTab = val
      }
    }
  }
</script>

<style>
  .mu-tabs .mu-tab-text {
    color: #ffffff;
    font-size: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .mu-tab-link + .mu-tab-link {
    border-left: 1px;
    border-color: black;
  }

  .mu-tabs {
    border-radius: 5px 5px 0 0;
  }

  .demo-popup-top {
    width: 100%;
    opacity: .8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
  }

  .loginCard .cardTitle {
    font-size: 20px !important;
  }

  @media (max-width: 996px) {
    .loginCard .mu-card {
      width: 80%;
      left: 10%;
      margin-top: 5%;
      border-radius: 5px;
    }
  }

  @media (min-width: 996px) {
    .loginCard .mu-card {
      width: 40%;
      left: 30%;
      margin-top: 5%;
      border-radius: 5px;
    }
  }

  .loginCard .mu-text-field-hint {
    width: auto;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .mu-card-text {

  }
</style>
