<template>
  <div class="w-[80vw] mx-auto">
    <HomeInfo
      title="Seu corte, no melhor horário pra você."
      subtitle="Agende online em poucos segundos — rápido, fácil e sem espera."
    />

    <div class="flex flex-col items-center">
      <PrimaryButton 
        name="Agendar"
        :method="iniciarAgendamento"
      />

      <div class="flex items-center w-full max-w-[100px]">
        <div class="flex-grow border-t border-gold"></div>
        <span class="px-2 my-8 font-bold">OU</span>
        <div class="flex-grow border-t border-gold"></div>
      </div>

      <!-- <p class="my-4 font-bold"> OU</p> -->
      <button
        class="bg-red text-white text-2xl font-bold rounded-sm h-14 w-80 lg:mb-10"
        @click="verAgendamentos"
      >
        Ver meus agendamentos
      </button>
    </div>
    <!-- <p>Sem filas. Sem complicação.</p> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import HomeInfo from "../components/HomeInfo.vue";
import PrimaryButton from "../components/PrimaryButton.vue";

const router = useRouter();

function iniciarAgendamento() {
  router.push("/cliente");
}

function verAgendamentos() {
  router.push("/meus-agendamentos");
}
</script>
