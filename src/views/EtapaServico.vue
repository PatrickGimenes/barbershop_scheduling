<template>
  <div class="w-[80vw] mx-auto">
    <HomeInfo title="O que vai ser hoje?" subtitle="Escolha um ou mais serviços abaixo." />
    <form class="max-w-md mx-auto p-4 space-y-6">
      <p class="font-semibold text-xl text-center py-4">
        Etapa <span class="font-bold">2</span> de <span class="font-bold">4</span>
      </p>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          v-for="service in services"
          :key="service.id"
          @click="toggleService(service.id)"
          class="relative cursor-pointer border rounded-xl p-5 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
          :class="selectedServiceIds.includes(service.id)
            ? 'bg-gold text-black border-gold'
            : 'bg-white text-gray-800 border-gray-300'"
        >
          <span
            v-if="selectedServiceIds.includes(service.id)"
            class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow"
          >
            ✓
          </span>
          <span class="font-semibold text-lg text-center">{{ service.name }}</span>
          <span class="mt-2 text-gray-500" :class="selectedServiceIds.includes(service.id) ? 'text-black' : ''">
            R$ {{ service.price.toFixed(2) }}
          </span>
        </div>
      </div>

      <p class="text-right font-bold text-lg">Total: R$ {{ total.toFixed(2) }}</p>

      <input
        @click="nextStep"
        type="button"
        value="Próxima etapa"
        class="bg-gold text-2xl my-8 font-bold rounded-sm h-14 w-full"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import HomeInfo from "../components/HomeInfo.vue";
import { useAgendamentoStore, type Service } from "../stores/useAgendamentoStore.ts";

const router = useRouter();
const store = useAgendamentoStore();

const services: Service[] = [
  { id: 1, name: "Corte masculino", price: 35 },
  { id: 2, name: "Barba", price: 20 },
  { id: 3, name: "Sobrancelha", price: 15 },
];

const selectedServiceIds = ref<number[]>([]);

function toggleService(id: number) {
  if (selectedServiceIds.value.includes(id)) {
    selectedServiceIds.value = selectedServiceIds.value.filter((s) => s !== id);
  } else {
    selectedServiceIds.value.push(id);
  }
}

const total = computed(() =>
  selectedServiceIds.value.reduce((acc, id) => {
    const s = services.find(s => s.id === id);
    return acc + (s ? s.price : 0);
  }, 0)
);

function nextStep() {
  if (selectedServiceIds.value.length === 0) {
    alert("Selecione pelo menos um serviço!");
    return;
  }
  const selected = services.filter(s => selectedServiceIds.value.includes(s.id));
  store.setServices(selected);
  router.push("/agendamento");
}
</script>
