// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import ElementUI from 'element-ui';
import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import Icon from 'vue-svg-icon/Icon.vue';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import axios from 'axios';

Vue.use(ElementUI, {size: 'small'});
Vue.use(VueQuillEditor);
Vue.component('icon', Icon);
Vue.config.productionTip = false;

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config
}, error => {
  return Promise.reject(error)
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    if (store.getters.role === '') {
      store.dispatch('updateUser', {token: token}).then(() => {
        next()
      })
    }
    else {
      next()
    }
  } else {
    store.dispatch('clearUser').then(() => {
      next()
    });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
