// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入第三方包
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入和vue无关的第三方包
import 'normalize.css'
import axios from 'axios'
import "./css/style.css"
// 导入自己写的模块
import App from './App'
import router from './router'
import api from './js/api_config.js'
import "./less/index.less"
import myFilter from "./filter"
import store from "./store";

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(myFilter)

axios.defaults.baseURL = 'http://localhost:8899'
axios.defaults.withCredentials = true

Vue.prototype.$http = axios
Vue.prototype.$api = api


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: new Vuex.Store(store)
})
