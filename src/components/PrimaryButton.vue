<script setup lang="ts">
defineProps<{ name: string; method: () => void}>();
</script>

<template>
  <button
    class="bg-gold text-2xl font-bold rounded-sm h-14 w-56"
    @click="method"
  >
    {{ name }}
  </button>
</template>
