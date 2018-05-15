// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import Icon from 'vue-svg-icon/Icon.vue';

Vue.use(ElementUI, {size: 'small'});
Vue.component('icon', Icon);
Vue.config.productionTip = false;

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next('/login')
    }
    else {
        store.dispatch('GetUserInfo').then(res => {
            const roles = res.roles;
            store.dispatch('GenerateRoutes', {roles}).then(() => {
                router.addRoutes(store.getters.addRouters)
            });
        });
        next()
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
