import Vue from 'vue';
import Router from 'vue-router';
import Table from './components/Table';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
  }, {
    path: '/form-with-binding',
    name: 'FormWithBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FormWithBinding" */ './components/FormWithBinding'),
  }, {
    path: '/form-with-references',
    name: 'FormWithReferences',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FormWithBinding" */ './components/FormWithReferences'),
  }, {
    path: '/server-table',
    name: 'Table',
    component: Table,
    props: { bigTable: false },
  }, {
    path: '/big-table',
    name: 'Table',
    component: Table,
    props: { bigTable: true },
  }],
});
