import index from './components/index.vue';
import http404 from './components/http404.vue';

export const appRoute = [
  {
    path: "",
    name: "root",
    redirect: '/index'
  },
  {
    path: "/index",
    name: "index",
    component: index
  },
  {
    path: "**",
    name: "http404",
    component: http404
  }
];
