import Vue from 'vue'
import App from './App.vue'
// import Highlight from './lib/highlight'
//
// Vue.use(Highlight)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
