import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import EtapaCliente from '../views/EtapaCliente.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/agendamento', component: EtapaCliente },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})