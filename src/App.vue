<script setup lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray">
    <HeaderApp />

    <main class="flex-grow">
      <RouterView />
    </main>

    <FooterApp />
  </div>
</template>
