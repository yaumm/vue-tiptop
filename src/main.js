import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/editor.less';
import Material from './components/Material';

Vue.config.productionTip = false;
Vue.use(ElementUI).use(Material);

console.log('fix test bug');
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
