<template>
  <nav class="flex justify-between items-center h-20 pr-4 bg-black">
    <img
      @click="backToHome"
      class="h-full bg-gold cursor-pointer"
      src="../assets/scissors.svg"
      alt="Ícone de uma tesoura amarela"
    />
    <p class="text-gold">Barbearia Barrado Jr</p>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function backToHome() {
  router.push("/");
}
</script>
