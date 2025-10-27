import { defineStore } from "pinia";
import { ref } from "vue";

export interface Service {
  id: number;
  name: string;
  price: number;
}


export const useAgendamentoStore = defineStore("agendamento", () => {
  const selectedDate = ref("");      // data selecionada
  const selectedTime = ref("");      // horário selecionado
  const selectedServices = ref<Service[]>([]);   // agora é um array de serviços
  const total = ref(0);              // valor total

  // Atualiza data e hora
  function setDateTime(date: string, time: string) {
    selectedDate.value = date;
    selectedTime.value = time;
  }

  // Atualiza serviços e valor total
  function setServices(services: Service[]) {
    selectedServices.value = services;
    total.value = services.reduce((acc, s) => acc + s.price, 0);
  }

  return {
    selectedDate,
    selectedTime,
    selectedServices,
    total,
    setDateTime,
    setServices,
  };
});
