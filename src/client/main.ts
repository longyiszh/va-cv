import './declarations';

import Vue from 'vue';
import App from './App.vue';

import VueRouter from "vue-router";
import { appRoute } from "./app.route";

import {
  MdApp,
  MdContent,
  MdIcon,
  MdToolbar
} from 'vue-material/dist/components';

Vue.use(VueRouter);

// vue material
Vue.use(MdApp);
Vue.use(MdContent);
Vue.use(MdIcon);
Vue.use(MdToolbar);

const router = new VueRouter({
  routes: appRoute
});

const v = new Vue({
  el: '#app',
  render: (h: any) => h(App),
  router: router
})
