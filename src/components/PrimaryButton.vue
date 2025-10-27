<script setup lang="ts">
defineProps<{ name: string; textColor?: string; method: () => void }>();

//class="bg-gold text-2xl font-bold rounded-sm h-14 w-56"
</script>

<template>
  <button
    :class="[
      'bg-gold font-bold text-xl px-6 py-3 rounded-lg hover:opacity-90 transition',
      textColor,
    ]"
    @click="method"
  >
    {{ name }}
  </button>
</template>
