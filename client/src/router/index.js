import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import PatientList from '@/components/PatientList';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/patient-list',
      name: 'PatientList',
      component: PatientList
    }
  ]
});
