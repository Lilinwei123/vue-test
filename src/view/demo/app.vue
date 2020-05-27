<template>
  <div>
    <p>防抖和节流</p>
    <p>防抖：触发后一段时间生效，若再次触发，重新计时</p>
    <input type="text" v-model="inputText" @keypress="fd">

    <p>节流：某段时间内只出发一次，如果再次触发只有第一次生效</p>
    <input type="text" v-model="inputText1" @keyup="jl(1000)">
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  computed: {
  },

  data: function() {
    return {
      inputText: '',
      inputText1: '',
      timeId: null,
      timeId1: null,
      timeId2: null,
      startTime: 0
    };
  },

  created() {

  },

  mounted() {
    
  },

  methods: {
    getInput (text) {
      console.log('inputTest is ' + text.length + '  ' + new Date().getTime());
    },

    fd () {
      if (this.timeId) {
        clearTimeout(this.timeId);
      }

      this.timeId = setTimeout (() => {
        this.getInput(this.inputText);
        this.timeId = null;
      }, 500)
    },

    jl (delay) {
      
      let curTime = new Date().getTime();
      let flag1 = 0;
      let flag2 = 0;

      if (!this.startTime) {
        this.startTime = curTime;
      } 

      // clearTimeout(this.timeId1);
// console.log('curTime-------', curTime);
// console.log('this.startTime-------', this.startTime);

      if (curTime - this.startTime >= delay) {
        // console.log('delay-------', curTime - this.startTime);
        this.startTime = curTime;
        // this.getInput(this.inputText1);
        // 100  1200的情况
        if (flag1 && this.timeId1) {
          clearTimeout(this.timeId1);
          this.timeId1 = null;
        } 

        if (flag2 && this.timeId2) {
          clearTimeout(this.timeId2);
          this.timeId2 = null;
          flag2 = 0;
        }

        if (this.timeId2) {
          this.timeId1 = setTimeout(() => {
            // console.log('qqqqqq');
            this.getInput(this.inputText1);
            flag2 = 1;
            console.log('time2-------', new Date().getTime() - this.startTime);
            // this.timeId1 = null;
          }, delay)

        } else {
          this.timeId2 = setTimeout(() => {
            // console.log('qqqqqq');
            this.getInput(this.inputText1);
            flag2 = 1;
            console.log('time2-------', new Date().getTime() - this.startTime);
            // this.timeId1 = null;
          }, delay)
        }
        

      } else {
        if (this.timeId1) {

        } else {
          if (this.timeId2) {

          } else {
            console.log('kkkkkk');
            this.timeId1 = setTimeout(() => {
              this.getInput(this.inputText1);
              flag1 = 1;
              // console.log('now time---', new Date().getTime());
              console.log('time1-------', new Date().getTime() - this.startTime);
              // this.timeId1 = null;
            }, delay)
          }
        }
      } 
    }
  }
}
</script>