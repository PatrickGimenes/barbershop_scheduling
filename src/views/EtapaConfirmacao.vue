<template>
  <div class="w-[80vw] mx-auto">
    <HomeInfo title="Tudo certo!" subtitle="Confira antes de finalizar" />

    <div class="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6">
      <p class="font-semibold text-xl text-center py-4">
        Etapa <span class="font-bold">4</span> de
        <span class="font-bold">4</span>
      </p>

      <div class="space-y-3 text-lg">
        <div class="flex justify-between">
          <span>Data:</span>
          <span class="font-bold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between">
          <span>Horário:</span>
          <span class="font-bold">{{ store.selectedTime }}</span>
        </div>

        <div class="flex justify-between">
          <span>Serviços:</span>
          <span class="font-semibold">{{
            store.selectedServices.map((s) => s.name).join(" + ")
          }}</span>
        </div>
        <div class="flex justify-between">
          <span>Total:</span>
          <span class="font-bold">R$ {{ store.total }}</span>
        </div>
      </div>

      <button
        @click="confirmBooking"
        class="bg-gold text-white text-2xl font-bold rounded-sm h-14 w-full"
      >
        Agendar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAgendamentoStore } from "../stores/useAgendamentoStore.ts";
import { useMeusAgendamentosStore } from "../stores/useMeusAgendamentosStore";

import HomeInfo from "../components/HomeInfo.vue";

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
