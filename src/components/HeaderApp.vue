<template>
  <nav class="flex justify-between items-center px-4 md:px-8 h-16 md:h-20 bg-black shadow-md">
    <!-- Logo clicável -->
    <img
      @click="backToHome"
      class="h-10 md:h-16 w-auto cursor-pointer transition-transform duration-200 hover:scale-110"
      src="../assets/scissors.svg"
      alt="Ícone de uma tesoura amarela"
    />

  
    <p class="text-gold text-lg md:text-2xl font-semibold select-none">
      Barbearia Barrado Jr
    </p>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function backToHome() {
  router.push("/");
}
</script>
