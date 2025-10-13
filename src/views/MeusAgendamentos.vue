<template>
  <div class="w-[80vw] mx-auto mb-10">
    <HomeInfo title="Meus agendamentos" subtitle="Veja seus agendamentos" />

    <div class="max-w-md mx-auto space-y-4">
      <div
        v-for="(agendamento, index) in store.agendamentos"
        :key="index"
        class="bg-white p-4 rounded-2xl shadow-md space-y-2"
      >
        <div class="flex justify-between">
          <span>Data:</span>
          <span class="font-bold">{{ formatDate(agendamento.date) }}</span>
        </div>
        <div class="flex justify-between">
          <span>Horário:</span>
          <span class="font-bold">{{ agendamento.time }}</span>
        </div>
        <div class="flex justify-between">
          <span>Serviço:</span>
          <span class="font-semibold">{{ agendamento.services.join(" + ") }}</span>
          
        </div>
        <div class="flex justify-between">
          <span>Total:</span>
          <span class="font-bold">R$ {{ agendamento.total }}</span>
        </div>

        <div class="flex justify-end gap-2 mt-2">
          <button @click="editAgendamento(index)" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Editar</button>
          <button @click="cancelAgendamento(index)" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeInfo from "../components/HomeInfo.vue";
import { useMeusAgendamentosStore } from "../stores/useMeusAgendamentosStore";

const store = useMeusAgendamentosStore();

function formatDate(d: string) {
  const dt = new Date(d);
  const day = dt.getDate().toString().padStart(2, "0");
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const year = dt.getFullYear();
  return `${day}/${month}/${year}`;
}

function editAgendamento(index: number) {
  alert(`Editar agendamento ${index + 1} (lógica de edição em desenvolvimento)`);
}

function cancelAgendamento(index: number) {
  if (confirm("Deseja realmente cancelar este agendamento?")) {
    store.cancelAgendamento(index);
  }
}
</script>
