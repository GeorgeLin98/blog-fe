import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {formatTime} from "./utils/time";

//自定义指令
Vue.directive('title',  function (el, binding) {
  document.title = el.dataset.title
})
// 格式化时间
Vue.filter('format', formatTime)

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
