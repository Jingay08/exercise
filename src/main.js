import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/css/reset.css'; // 设置默认样式
import ElementUI from "element-ui";
import './utils/js/element-conifg'; // element 配置
import 'element-ui/lib/theme-chalk/index.css';
import constant from './utils/js/constant';
import Components from './components';

Vue.config.productionTip = false


Vue.use(ElementUI); //挂载element 样式框架
Vue.use(Components);

Vue.prototype.constant = constant;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
