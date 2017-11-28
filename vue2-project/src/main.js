// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import FontAwesome from 'font-awesome/css/font-awesome.min.css'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueResource)
Vue.use(FontAwesome)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.http.options.emulateHTTP = true
Vue.http.options.crossOrigin = true
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
  if (localStorage.getItem('token')) {
    Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  }
  next((response) => {
    if (response.status === 401) {
      localStorage.removeItem('token')
    }
  })
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if ((!token || token === null) && to.path !== '/login') {
    next('/login')
  } else {
    if (!(!token || token === null) && to.path === '/login') {
      localStorage.removeItem('token')
      next()
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
