<template>
  <div class="w-[90vw] lg:w-[70vw] mx-auto mb-12">
    <HomeInfo
      title="Meus agendamentos"
      subtitle="Confira seus próximos horários"
    />

    <div
      v-if="store.agendamentos.length === 0"
      class="text-center mt-10 text-gray-600"
    >
      Você ainda não tem agendamentos.
    </div>

    <div class="max-w-3xl mx-auto space-y-6 mt-6">
      <div
        v-for="(agendamento, index) in store.agendamentos"
        :key="index"
        class="bg-white p-6 rounded-3xl shadow-lg relative hover:shadow-2xl transition transform hover:-translate-y-1"
      >
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2 text-gray-700">
            <img src="../assets/calendar.svg" alt="Data" class="w-5 h-5" />
            <span>{{ formatDate(agendamento.date) }}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-700">
            <img src="../assets/clock.svg" alt="Hora" class="w-5 h-5" />
            <span>{{ agendamento.time }}</span>
          </div>
        </div>

        <div class="mb-3 text-gray-800">
          <span class="font-semibold">Serviços:</span>
          <span class="ml-1">{{ agendamento.services.join(" + ") }}</span>
        </div>

        <div
          class="flex items-center justify-between text-gray-800 font-bold mb-4"
        >
          <div class="flex items-center gap-2">
            <img src="../assets/money.svg" alt="Total" class="w-5 h-5" />
            Total
          </div>
          <span>R$ {{ agendamento.total.toFixed(2) }}</span>
        </div>

        <EditAgendamentoModal
          :show="showModal"
          :agendamento="selectedAgendamento"
          :services="availableServices"
          :availableTimes="availableTimes"
          @close="showModal = false"
          @save="updateAgendamento"
        />

        <div class="flex justify-end gap-3">
          <button
            @click="editAgendamento(index)"
            class="px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            Editar
          </button>
          <button
            @click="cancelAgendamento(index)"
            class="px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeInfo from "../components/HomeInfo.vue";
import EditAgendamentoModal from "../components/EditAgendamentoModal.vue";
import { useMeusAgendamentosStore } from "../stores/useMeusAgendamentosStore";
import api from "../api";
import { onMounted, ref } from "vue";

const store = useMeusAgendamentosStore();

const showModal = ref(false);
const selectedAgendamento = ref(null);
const availableServices = ref([
  { id: 1, name: "Corte masculino", price: 35 },
  { id: 2, name: "Barba", price: 20 },
  { id: 3, name: "Sobrancelha", price: 15 },
]);
const availableTimes = ref(["08:00", "09:30", "11:00", "13:00", "15:00"]);

onMounted(async () => {
  try {
    const res = await api.get("/clientes/agendamentos");
    if (res.data) {
      // Atualiza a store com os agendamentos do backend
      console.log(res.data);
    }
  } catch (err: any) {
    console.error(err);
    console.log(err.response?.data?.error || "Erro ao carregar agendamentos");
  }
});

function formatDate(d: string) {
  const dt = new Date(d);
  const day = dt.getDate().toString().padStart(2, "0");
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const year = dt.getFullYear();
  return `${day}/${month}/${year}`;
}

function editAgendamento(index: number) {
  // selectedAgendamento.value = { ...store.agendamentos[index] };
  console.log(index);
  showModal.value = true;
}

function updateAgendamento(updated: any) {
  console.log(updated);
  // const index = store.agendamentos.findIndex(
  //   (a) =>
  //     a.date === selectedAgendamento.value.date &&
  //     a.time === selectedAgendamento.value.time
  // );
  // if (index >= 0) store.agendamentos[index] = updated;
}

function cancelAgendamento(index: number) {
  if (confirm("Deseja realmente cancelar este agendamento?")) {
    store.cancelAgendamento(index);
  }
}
</script>
