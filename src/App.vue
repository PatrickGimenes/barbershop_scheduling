<script setup lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";

import { setAccessToken } from "./api";

const token = localStorage.getItem("accessToken");
if (token) setAccessToken(token);
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
