import { defineStore } from "pinia";
import { ref } from "vue";

export interface Agendamento {
  date: string;
  time: string;
  services: string[];
  total: number;
}

export const useMeusAgendamentosStore = defineStore("meusAgendamentos", () => {
  const agendamentos = ref<Agendamento[]>([]);

  function addAgendamento(agendamento: Agendamento) {
    agendamentos.value.push(agendamento);
  }

  function editAgendamento(index: number, updated: Agendamento) {
    if (agendamentos.value[index]) {
      agendamentos.value[index] = updated;
    }
  }

  function cancelAgendamento(index: number) {
    if (agendamentos.value[index]) {
      agendamentos.value.splice(index, 1);
    }
  }

  return {
    agendamentos,
    addAgendamento,
    editAgendamento,
    cancelAgendamento,
  };
});
