import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store"
import Pagination from "vuejs-paginate";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false
Vue.component('pagination', Pagination)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
