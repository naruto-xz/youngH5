import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/my-patient',
    name: 'myPatient',
    component: () => import(/* webpackChunkName: "my-patient" */ '../pages/my-patient/views/index.vue')
  },
  {
    path: '/',
    redirect: '/my-patient'
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
