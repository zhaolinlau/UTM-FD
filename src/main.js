import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import mdi from '@mdi/font/css/materialdesignicons.css'
import animate from 'animate.css'

Vue.config.productionTip = false

new Vue({
  animate,
  mdi,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
