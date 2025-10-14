<template>
  <div class="w-[80vw] mx-auto">
    <HomeInfo
      title="Escolha a data e horário"
      subtitle="Selecione o dia e horário que deseja ser atendido."
    />

    <div class="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6">
      <p class="font-semibold text-xl text-center py-4">
        Etapa <span class="font-bold">3</span> de
        <span class="font-bold">4</span>
      </p>

      <!-- Dias disponíveis -->
      <div>
        <h3 class="font-medium mb-2">Dia</h3>
        <div class="flex gap-2 overflow-x-auto pb-2">
          <button
            v-for="day in availableDays"
            :key="day"
            @click="selectDate(day)"
            :class="[
              'px-4 py-2 rounded-lg border min-w-[80px] text-center whitespace-nowrap',
              selectedDate === day
                ? 'bg-gold text-white border-gold'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200',
            ]"
          >
            {{ formatDay(day) }}
          </button>
        </div>
      </div>

      <!-- Horários disponíveis -->
      <div v-if="selectedDate">
        <h3 class="font-medium mb-2">Horário</h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="time in availableTimes"
            :key="time"
            @click="selectTime(time)"
            :class="[
              'px-4 py-2 rounded-lg border',
              selectedTime === time
                ? 'bg-gold text-white border-gold'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200',
            ]"
          >
            {{ time }}
          </button>
        </div>
      </div>

      <!-- Próxima etapa -->

      <button
        @click="nextStep"
        :disabled="!selectedDate || !selectedTime"
        class="bg-gold text-2xl font-bold rounded-sm h-14 w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Próxima etapa
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import HomeInfo from "../components/HomeInfo.vue";
import { useAgendamentoStore } from "../stores/useAgendamentoStore.ts";

const router = useRouter();
const store = useAgendamentoStore();

const availableDays = ref<string[]>([]);
const availableTimes = ref<string[]>([]);
const selectedDate = ref("");
const selectedTime = ref("");

onMounted(() => {
  // Simulação API
  availableDays.value = ["2025-10-14", "2025-10-15", "2025-10-16"];
});

function selectDate(day: string) {
  selectedDate.value = day;
  selectedTime.value = "";
  // Simulação fetch de horários
  availableTimes.value =
    day === "2025-10-14"
      ? ["09:00", "10:30", "14:00"]
      : ["08:00", "12:00", "16:00"];
}

function selectTime(time: string) {
  selectedTime.value = time;
}

function formatDay(day: string) {
  const date = new Date(day);
  return `${date.getDate()}/${date.getMonth() + 1}`;
}
// Salvar dados e ir para confirmação
function nextStep() {
  if (!selectedDate.value || !selectedTime.value) return;

  // Salvar na store
  store.setDateTime(selectedDate.value, selectedTime.value);

  router.push("/confirmacao");
}
</script>
