<template>
  <div class="min-h-screen flex flex-col bg-gray px-4 py-8">
    <HomeInfo
      title="O que vai ser hoje?"
      subtitle="Escolha um ou mais serviços abaixo."
    />

    <form
      class="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6 animate-fadeIn"
    >
      <p class="text-center font-semibold text-xl">
        Etapa <span class="font-bold">2</span> de
        <span class="font-bold">4</span>
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="service in services"
          :key="service.id"
          @click="toggleService(service.id)"
          class="relative cursor-pointer border rounded-xl p-6 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105"
          :class="
            selectedServiceIds.includes(service.id)
              ? 'bg-gold text-black border-gold shadow-lg'
              : 'bg-white text-gray-800 border-gray-300 hover:shadow-md'
          "
        >
          <span
            v-if="selectedServiceIds.includes(service.id)"
            class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow"
            >✓</span
          >

          <img
            :src="service.icon"
            alt="Ícone do serviço"
            class="w-12 h-12 mb-3"
          />

          <span class="font-semibold text-lg">{{ service.name }}</span>
          <span
            class="mt-1 text-gray-500"
            :class="
              selectedServiceIds.includes(service.id)
                ? 'text-black font-bold'
                : ''
            "
          >
            R$ {{ service.price.toFixed(2) }}
          </span>
        </div>
      </div>

      <div class="flex justify-between items-center mt-4">
        <p class="font-bold text-lg">Total: R$ {{ total.toFixed(2) }}</p>
        <PrimaryButton
          name="Próxima etapa"
          :method="nextStep"
          textColor="text-white"
          bgColor="bg-gold"
          hoverColor="bg-yellow-600"
          width="w-48"
          height="h-14"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import HomeInfo from "../components/HomeInfo.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import {
  useAgendamentoStore,
  type Service,
} from "../stores/useAgendamentoStore.ts";

const router = useRouter();
const store = useAgendamentoStore();

const services: Service[] = [
  { id: 1, name: "Corte masculino", price: 35, icon: "/src/assets/scissors.svg" },
  { id: 2, name: "Barba", price: 20, icon: "/src/assets/scissors.svg" },
  { id: 3, name: "Sobrancelha", price: 15, icon: "/src/assets/scissors.svg" },
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
    const s = services.find((s) => s.id === id);
    return acc + (s ? s.price : 0);
  }, 0)
);

function nextStep() {
  if (selectedServiceIds.value.length === 0) {
    alert("Selecione pelo menos um serviço!");
    return;
  }
  const selected = services.filter((s) =>
    selectedServiceIds.value.includes(s.id)
  );
  store.setServices(selected);
  router.push("/agendamento");
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}
</style>
