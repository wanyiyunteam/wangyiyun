// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import router from './router'
import axios from 'axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Icon } from 'vant';
import 'vant/lib/index.css';
import { Progress } from 'vant';
import { Button } from 'vant';


Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Progress);


axios.defaults.baseURL = "http://localhost:3000/";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
