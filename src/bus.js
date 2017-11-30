import Vue from 'vue';

export default window.bus = new Vue({
    data: {
      FormData: [],
      Form: {},
      userdata: [],
      login: false,
      clientWidth: 0
    },
    created() {
      const that = this
      this.$on('display', function (FormData) {
        // console.log(JSON.stringify(FormData)+'bushshshshshssh')
        //FormData=JSON.parse(FormData)
        eval('FormData=' + FormData)
        that.FormData = FormData.slice(0)
        //console.log(that.FormData)
      })
    },
  methods: {
    isPhone() {
      return this.clientWidth <= 768
    }
  },
  watch: {
    login(val) {
      this.$emit('login', val)
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
);
