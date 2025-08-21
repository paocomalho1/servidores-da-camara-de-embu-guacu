import { createRouter, createWebHistory } from 'vue-router';
import Servidor from '../views/Servidor.vue';
import Servidores from '../views/Servidores.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Sevidores',
      component: Servidores,
    },
    {
      path:'/servidor',
      name:'servidor',
      component: Servidor,
      props: true
    },
  ]
})


export default router
