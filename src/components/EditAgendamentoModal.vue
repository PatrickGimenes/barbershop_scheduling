<!-- EditAgendamentoModal.vue -->
<script setup lang="ts">
import { ref, watch } from "vue";
import type { Agendamento, Service } from "../stores/useAgendamentoStore";

// Props
const props = defineProps<{
  show: boolean;
  agendamento: Agendamento | null;
  services: Service[];
  availableTimes: string[];
  onClose?: () => void;
  onSave?: (agendamento: Agendamento) => void;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "save", agendamento: Agendamento): void;
}>();

// Local copy to edit
const localAgendamento = ref<Agendamento>({
  date: "",
  time: "",
  services: [],
  total: 0,
});

// Watch for changes in props.agendamento
watch(
  () => props.agendamento,
  (newVal) => {
    if (newVal) {
      localAgendamento.value = { ...newVal };
    }
  },
  { immediate: true }
);

// Methods
function closeModal() {
  emit("close");
  props.onClose?.();
}

function saveChanges() {
  if (!localAgendamento.value.date || !localAgendamento.value.time) {
    alert("Selecione data e horário!");
    return;
  }

  // Atualiza total caso serviços tenham sido alterados
  localAgendamento.value.total = localAgendamento.value.services.reduce(
    (acc, s) => acc + s.price,
    0
  );

  emit("save", { ...localAgendamento.value });
  props.onSave?.({ ...localAgendamento.value });
  closeModal();
}

function toggleService(service: Service) {
  const idx = localAgendamento.value.services.findIndex((s) => s.id === service.id);
  if (idx >= 0) {
    localAgendamento.value.services.splice(idx, 1);
  } else {
    localAgendamento.value.services.push(service);
  }
}
</script>

<template>
  <div
    v-if="props.show"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-2xl shadow-lg p-6 w-[90vw] max-w-md relative">
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
      >
        ×
      </button>

      <h2 class="text-2xl font-bold mb-4 text-center">Editar Agendamento</h2>

      <!-- Data -->
      <div class="mb-4">
        <label class="font-semibold block mb-2">Data</label>
        <input
          type="date"
          v-model="localAgendamento.date"
          class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
        />
      </div>

      <!-- Horário -->
      <div class="mb-4">
        <label class="font-semibold block mb-2">Horário</label>
        <select
          v-model="localAgendamento.time"
          class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
        >
          <option disabled value="">Selecione</option>
          <option
            v-for="time in props.availableTimes"
            :key="time"
            :value="time"
          >
            {{ time }}
          </option>
        </select>
      </div>

      <!-- Serviços -->
      <div class="mb-4">
        <label class="font-semibold block mb-2">Serviços</label>
        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="service in props.services"
            :key="service.id"
            type="button"
            @click="toggleService(service)"
            :class="[
              'px-3 py-2 rounded-lg border text-center transition',
              localAgendamento.services.some((s) => s.id === service.id)
                ? 'bg-gold text-black border-gold'
                : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200',
            ]"
          >
            {{ service.name }} - R$ {{ service.price.toFixed(2) }}
          </button>
        </div>
      </div>

      <!-- Total -->
      <p class="text-right font-bold text-lg mb-4">
        Total: R$ {{
          localAgendamento.services.reduce((acc, s) => acc + s.price, 0).toFixed(2)
        }}
      </p>

      <!-- Botão salvar -->
      <button
        @click="saveChanges"
        class="w-full bg-gold text-black font-bold text-xl py-3 rounded-lg hover:opacity-90 transition"
      >
        Salvar Alterações
      </button>
    </div>
  </div>
</template>
