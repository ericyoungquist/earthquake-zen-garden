import Vue from 'vue';
import App from './App.vue';
import router from './router';
import sourceData from "./assets/data/db.json";

Vue.config.productionTip = false;

new Vue({
  name: 'Root',
  data: sourceData,
  router,
  render: (h) => h(App)
}).$mount('#app');

