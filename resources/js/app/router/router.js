import { createRouter, createWebHistory } from 'vue-router';
import Main from '../../views/MainView.vue';

const routes = [
  { path: '/', component: Main },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
