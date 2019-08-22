import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import './icons' // icon
import './errorLog' // error log
import './permission' // permission control

import * as filters from './filters' // global filters
import { getJS, getUrlRoot } from './utils'

Vue.use(Element, {
  size: 'medium' // set element-ui default size
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* global pt */
getJS('//imgcache.qq.com/ptlogin/ac/v9/js/ptlogin_v1.js')
  .then(function() {
    pt.setParams({
      appid: 1600001220,
      daid: 6,
      s_url: getUrlRoot(),
      style: 40,
      protocol: 'http:',
      domain: 'qq.com',
      border_radius: 1,
      target: '',
      maskOpacity: 40
    })
  })
  .then(function() {})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
