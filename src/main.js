import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

import './public/style/index.scss';
import './public/lib/resize.js';

new Vue({
    router,
    render: h => h(App)
}).$mount('#my-app');
