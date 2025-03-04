import { createRouter, createWebHistory } from 'vue-router';

import ProgressBarPage from '@/pages/ProgressBarPage.vue';
import DiagramPage from '@/pages/DiagramPage.vue';

const routes = [
  {
    path: '/',
    component: ProgressBarPage,
  },
  {
    path: '/diagram',
    component: DiagramPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
