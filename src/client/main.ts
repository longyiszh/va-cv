import './declarations';

import Vue from 'vue';
import App from './App.vue';

import VueRouter from "vue-router";
import { appRoute } from "./app.route";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: appRoute
});

const v = new Vue({
  el: '#app',
  render: (h: any) => h(App),
  router: router
})
