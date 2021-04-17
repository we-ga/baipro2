import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Student from '../views/Student.vue';
import Achievements from '../views/Achievements.vue';
import Grades from '../views/Grades.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,
  },

  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements,
  },

  {
    path: '/grades',
    name: 'Grades',
    component: Grades,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
