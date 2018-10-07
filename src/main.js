import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Resource from 'vue-resource'
import payKeyboard from 'my-pay-keyboard'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Resource)
Vue.use(payKeyboard)
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
export default vm;