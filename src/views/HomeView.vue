<template>
  <div class="w-80 mx-auto">
    <h1 class="font-bold my-4 text-4xl">
      Seu corte, no melhor horário pra você.
    </h1>
    <p class="text-xl mb-8">
      Agende online em poucos segundos — rápido, fácil e sem espera.
    </p>
    <div class="flex flex-col items-center">
      <button
        class="bg-gold font-bold rounded-sm h-14 w-56"
        @click="goScheduling"
      >
        Agendar agora
      </button>

      <div class="flex items-center w-full max-w-[100px]">
        <div class="flex-grow border-t border-gold"></div>
        <span class="px-2 my-1 font-bold">OU</span>
        <div class="flex-grow border-t border-gold"></div>
      </div>

      <!-- <p class="my-4 font-bold"> OU</p> -->
      <button class="bg-red text-white font-bold rounded-sm h-14 w-50">
        Ver meus agendamentos
      </button>
    </div>
    <!-- <p>Sem filas. Sem complicação.</p> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goScheduling() {
  router.push("/agendamento");
}
</script>
