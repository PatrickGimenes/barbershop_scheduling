<template>
  <div class="min-h-screen bg-gray flex flex-col items-center py-12 px-4">
    <!-- Seção principal de sucesso -->
    <div
      class="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 flex flex-col items-center space-y-6"
    >
      <div
        class="flex items-center justify-center rounded-full shadow-lg animate-bounce"
      >
        <img
          src="../assets/check.svg"
          class="w-32 h-32"
          alt="Check de confirmação"
        />
      </div>

      <h2 class="text-3xl font-bold text-center text-gray-800">
        Agendamento Confirmado!
      </h2>
      <p class="text-center text-gray-600">
        Seu corte foi agendado com sucesso. Confira os detalhes abaixo e fique
        tranquilo!
      </p>

      <!-- Resumo do agendamento -->
      <div class="w-full bg-gray-50 p-4 rounded-lg space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-medium">Data:</span>
          <span class="font-semibold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="font-medium">Horário:</span>
          <span class="font-semibold">{{ store.selectedTime }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="font-medium">Serviços:</span>
          <span class="font-semibold">{{
            store.selectedServices.map((s) => s.name).join(", ")
          }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="font-medium">Total:</span>
          <span class="font-semibold">R$ {{ store.total }}</span>
        </div>
      </div>

      <!-- Informações do salão -->
      <div class="w-full bg-gray-50 p-4 rounded-lg space-y-2">
        <h3 class="font-semibold text-gray-800">Informações do salão</h3>
        <div class="flex items-center gap-2">
          <img src="../assets/location.svg" class="w-5 h-5" alt="Localização" />
          <span>R. Cel. Ernesto de Oliveira, 467 - São João da Boa Vista, SP</span>
        </div>
        <div class="flex items-center gap-2">
          <img src="../assets/phone.svg" class="w-5 h-5" alt="Telefone" />
          <span>+55 (19) 99939-7888</span>
        </div>
        <div class="flex items-center gap-2">
          <img src="../assets/instagram.svg" class="w-5 h-5" alt="Instagram" />
          <span>@barbeariajrbarrado</span>
        </div>
      </div>

      <!-- Botões -->
      <div class="flex flex-col gap-4 w-full">
        <button
          @click="nextStep"
          class="bg-gold text-black text-2xl font-bold rounded-sm h-14 w-full hover:opacity-90 transition"
        >
          Meus Agendamentos
        </button>
        <button
          @click="goHome"
          class="bg-gray-300 text-gray-800 text-xl font-bold rounded-sm h-12 w-full hover:bg-gray-400 transition"
        >
          Voltar para a home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAgendamentoStore } from "../stores/useAgendamentoStore.ts";
// import HomeInfo from "../components/HomeInfo.vue";

const store = useAgendamentoStore();
const router = useRouter();

const formattedDate = computed(() => {
  if (!store.selectedDate) return "";
  const dt = new Date(store.selectedDate);
  const day = dt.getDate().toString().padStart(2, "0");
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const year = dt.getFullYear();
  return `${day}/${month}/${year}`;
});

function nextStep() {
  router.push("/meus-agendamentos");
}

function goHome() {
  router.push("/");
}
</script>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
