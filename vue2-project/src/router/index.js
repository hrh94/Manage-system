import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Common/Home.vue'
import HomePage from '../components/Common/HomePage.vue'
import TempAA from '../components/Modules/TempAA'
import TempAB from '../components/Modules/TempAB'
import TempAC from '../components/Modules/TempAC'
import TempBA from '../components/Modules/TempBA'
import TempBB from '../components/Modules/TempBB'
import TempBC from '../components/Modules/TempBC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/readme',
      component: Home,
      children: [{
        path: '/',
        component: HomePage
      }, {
        path: '/tempaa',
        component: TempAA
      }, {
        path: '/tempab',
        component: TempAB
      }, {
        path: '/tempac',
        component: TempAC
      }, {
        path: '/tempba',
        component: TempBA
      }, {
        path: '/tempbb',
        component: TempBB
      }, {
        path: '/tempbc',
        component: TempBC
      }]
    }
  ]
})
