import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

Vue.use(VueAxios, axios)

// ajax 全局配置
axios.defaults.baseURL = global.API.baseURL
axios.defaults.timeout = 1000 * 30
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截
axios.interceptors.request.use((config) => {
  let urls = config.url.split('.')
})