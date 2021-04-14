// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import MainSection from './sections/MainSection'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/user/:id', component: MainSection }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
