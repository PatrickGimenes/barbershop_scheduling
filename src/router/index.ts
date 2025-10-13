import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import EtapaCliente from "../views/EtapaCliente.vue";
import EtapaServico from "../views/EtapaServico.vue";
import EtapaAgenda from "../views/EtapaAgenda.vue";
import EtapaConfirmacao from "../views/EtapaConfirmacao.vue";
import Sucess from "../views/Sucess.vue";
import MeusAgendamentos from "../views/MeusAgendamentos.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/cliente", component: EtapaCliente },
  { path: "/servico", component: EtapaServico },
  { path: "/agendamento", component: EtapaAgenda },
  { path: "/confirmacao", component: EtapaConfirmacao },
  { path: "/sucesso", component: Sucess },
  { path: "/meus-agendamentos", component: MeusAgendamentos },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
