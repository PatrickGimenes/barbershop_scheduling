<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>();
</script>

<template>
  <div class="text-center my-12 lg:my-16 px-4 lg:px-0" v-fade>
    <h1
      class="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-800 mb-4"
    >
      {{ title }}
    </h1>
    <p class="text-xl sm:text-2xl lg:text-3xl text-gray-600">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
[v-fade] {
  animation: fadeInUp 0.8s ease forwards;
}
</style>
