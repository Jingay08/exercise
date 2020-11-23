import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/css/reset.css'; // 设置默认样式
import './utils/css/common.css';
import './utils/css/common_icon.css';
import ElementUI from "element-ui";
import './utils/js/element-conifg'; // element 配置
import 'element-ui/lib/theme-chalk/index.css';
import constant from './utils/js/constant';
import Components from './components';
import 'lodash'; // 引入lodash库
import Port from "./library";

Vue.config.productionTip = false


Vue.use(ElementUI); //挂载element 样式框架
Vue.use(Components);
Vue.use(Port); //挂载$More 模块方法包

Vue.prototype.constant = constant;

new Vue({
  router,
  store,
  Port,
  render: h => h(App)
}).$mount('#app')
