<script setup lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
import { setAccessToken } from "./api";

// Recupera token do localStorage ao iniciar a aplicação
const token = localStorage.getItem("accessToken");
if (token) setAccessToken(token);
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <!-- Navbar -->
    <HeaderApp />

    <!-- Conteúdo principal -->
    <main class="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-6">
      <RouterView />
    </main>

    <!-- Footer -->
    <FooterApp />
  </div>
</template>

<style scoped>
/* Caso queira adicionar um background sutil global */
.bg-gray-50 {
  background-color: #f9fafb;
}
</style>
