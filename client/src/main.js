// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/global/Panel'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  rtl: true,
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)

sync(store, router)
/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
