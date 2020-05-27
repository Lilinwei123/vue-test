import Vue from 'vue'
import Excel from './excel'
import './js-xlsx-master/dist/xlsx.full.min.js';


// new Vue({
// 	el: '#app',
// 	template: '<Excel/>',
// 	components: { Excel }
// })


new Vue({
  render: (h) => {
    return h(Excel)
  }
}).$mount('#app')
