import Vue from 'vue';

export default new Vue({
    data: {
      FormData: [],
      Form: {}
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
    }
  }
);
