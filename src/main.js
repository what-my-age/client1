import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css'
import Vuesax from 'vuesax'

Vue.use(Vuesax)
// Vue.use(BootstrapVue)

new Vue(App).$mount('#App')