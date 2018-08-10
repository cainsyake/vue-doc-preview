import Vue from 'vue'
import demo from './demo'

Vue.config.productionTip = false

// 开发环境 DEMO
new Vue({
  render: h => h(demo)
}).$mount('#app')
