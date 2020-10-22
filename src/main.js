import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SweetModal from 'sweet-modal-vue/src/plugin.js'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

Vue.use(SweetModal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
