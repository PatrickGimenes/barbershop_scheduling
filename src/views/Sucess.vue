<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAgendamentoStore } from "../stores/useAgendamentoStore.ts";

import HomeInfo from "../components/HomeInfo.vue";

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
</script>

<template>
  <div class="w-[80vw] mx-auto">
    <div class="text-center">
      <HomeInfo title="Sucesso!" subtitle="" />
    </div>

    <div class="flex flex-col items-center">
      <img
        class="text-emerald-700 md:w-48"
        src="../assets/check.svg"
        alt="Ícone de confirmação"
      />

      <p class="text-md">
        Seu corte foi agendado com
        <span class="font-semibold">sucesso</span> para o dia:
      </p>

      <p class="text-2xl text-center my-8">
        <span class="font-semibold">
          {{ formattedDate }}
        </span>
        às <span class="font-semibold"> {{ store.selectedTime }}</span>
      </p>
    </div>
    <div class="flex justify-center">
      <button
        class="bg-gold text-2xl font-bold rounded-sm h-14 w-56"
        @click="nextStep"
      >
        Ver agendamentos
      </button>
    </div>
  </div>
</template>
