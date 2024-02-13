
import { createRouter, createWebHashHistory } from 'vue-router'
import ViewEditNote from '@/views/ViewEditNote.vue';
import ViewNotes from '@/views/ViewNotes.vue';
import ViewStats from '@/views/ViewStats.vue';

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/editNote/:id',
    name: 'editNotes',
    component: ViewEditNote
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;