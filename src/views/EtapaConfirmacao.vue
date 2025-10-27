<template>
  <div class="min-h-screen flex flex-col bg-gray px-4 py-8">
    <HomeInfo title="Tudo certo!" subtitle="Confira antes de finalizar" />

    <div class="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6">
      <p class="text-center font-semibold text-xl py-4">
        Etapa <span class="font-bold">4</span> de
        <span class="font-bold">4</span>
      </p>

      <div class="space-y-4 text-lg">
        <div
          class="flex items-center justify-between border-b border-gray-200 pb-2"
        >
          <span class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3M3 11h18M5 11v10a2 2 0 002 2h10a2 2 0 002-2V11"
              />
            </svg>
            Data
          </span>
          <span class="font-bold">{{ formattedDate }}</span>
        </div>

        <div
          class="flex items-center justify-between border-b border-gray-200 pb-2"
        >
          <span class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3"
              />
            </svg>
            Horário
          </span>
          <span class="font-bold">{{ store.selectedTime }}</span>
        </div>

        <div
          class="flex items-center justify-between border-b border-gray-200 pb-2"
        >
          <span class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7h18M3 11h18M3 15h18M3 19h18"
              />
            </svg>
            Serviços
          </span>
          <span class="font-semibold">{{
            store.selectedServices.map((s) => s.name).join(" + ")
          }}</span>
        </div>

        <div class="flex items-center justify-between pt-2">
          <span class="flex items-center gap-2 font-bold"> Total </span>
          <span class="font-bold text-lg">R$ {{ store.total }}</span>
        </div>
      </div>

      <PrimaryButton
        name="Agendar Agora"
        :method="confirmBooking"
        textColor="text-white"
        class="w-full mt-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAgendamentoStore } from "../stores/useAgendamentoStore.ts";
import { useMeusAgendamentosStore } from "../stores/useMeusAgendamentosStore";

import HomeInfo from "../components/HomeInfo.vue";
import PrimaryButton from "../components/PrimaryButton.vue";

const store = useAgendamentoStore();
const storeMeusAgendamentos = useMeusAgendamentosStore();
const router = useRouter();

const formattedDate = computed(() => {
  if (!store.selectedDate) return "";
  const dt = new Date(store.selectedDate);
  const day = dt.getDate().toString().padStart(2, "0");
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const year = dt.getFullYear();
  return `${day}/${month}/${year}`;
});

function confirmBooking() {
  storeMeusAgendamentos.addAgendamento({
    date: store.selectedDate,
    time: store.selectedTime,
    services: store.selectedServices.map((s) => s.name),
    total: store.total,
  });
  //store.reset();
  router.push("/sucesso");
}
</script>

<style scoped>
/* Pequena animação de hover nos itens 
div.space-y-4 > div:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease-in-out;
}
  */
</style>
