import Vue from 'vue'

import Config from '../assets/js/settings'

export default ({ $axios, redirect, route, store }) => {
  // console.log($axios)
  function request(config) {
    const instance = $axios.create({
      baseURL: Config.BASE_URL,
      withCredentials: true,  // 允许请求携带 cookie
    })
    instance.interceptors.request.use(config => {
      // Nprogress.start()
      return config
    })
    instance.interceptors.response.use(config => {
      // Nprogress.done()
      return config
    })

    return instance(config)
  }
  Vue.prototype.$request = request
}