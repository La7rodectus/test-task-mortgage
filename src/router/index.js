import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

const isServer = typeof window === 'undefined';

const history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/editBank', component: () => import('../pages/BanksList.vue') },
  { path: '/editBank/:name', name: 'editBank', component: () => import('../pages/BankEdit.vue') },
  { path: '/addBank', component: () => import('../pages/AddBank.vue') },
];

export default createRouter({ routes, history });

