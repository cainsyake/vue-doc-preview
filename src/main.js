import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 开发环境 DEMO
new Vue({
  render: h => h(App)
}).$mount('#app')
