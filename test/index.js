import Vue from 'vue'
import dev from './dev'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)

// 开发环境 DEMO
new Vue({
  render: h => h(dev)
}).$mount('#dev')
